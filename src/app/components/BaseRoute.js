import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';
import { availableLanguages, defaultLanguage } from '../../../example/src/config/locales/translations';
import PrimaryLayout from '../../../example/src/app/components/layouts/PrimaryLayout';
import CrumbRoute from './router/CrumbRoute';

class BaseRoute extends Component {
  componentWillMount() {
    const { location, history } = this.props;

    this.setLanguageFromUrl(location);
    history.listen(this.setLanguageFromUrl.bind(this));
  }

  setLanguageFromUrl({ pathname }) {
    const { history, cookies, dispatch, lang } = this.props;
    const language = pathname.split('/').filter(Boolean)[0];
    const isAvailableLanguage = availableLanguages.includes(language);

    if (!isAvailableLanguage) {
      history.push(`/${cookies.get('lang') || defaultLanguage}`);
      dispatch(setLanguage(cookies.get('lang') || defaultLanguage));
    } else if (lang !== language) {
      dispatch(setLanguage(language));
      cookies.set('lang', language, { path: '/' });
    }
  }

  render() {
    return (
      <CrumbRoute path="/en" title="home" component={PrimaryLayout} />
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.i18nState.lang,
  };
}

BaseRoute.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  cookies: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps)(withCookies(BaseRoute)));
