import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';
import CrumbRoute from './router/CrumbRoute';

class BaseRoute extends Component {
  componentWillMount() {
    const { location, history } = this.props;

    this.setLanguageFromUrl(location);
    history.listen(this.setLanguageFromUrl.bind(this));
  }

  setLanguageFromUrl({ pathname }) {
    const { history, dispatch, lang } = this.props;
    const { cookies, availableLanguages, defaultLanguage, response } = this.context;
    const language = pathname.split('/').filter(Boolean)[0];
    const isAvailableLanguage = availableLanguages.includes(language);

    if (!isAvailableLanguage) {
      if (response) {
        response.redirect(`/${cookies.get('lang') || defaultLanguage}`);
      } else {
        history.push(`/${cookies.get('lang') || defaultLanguage}`);
      }

      dispatch(setLanguage(cookies.get('lang') || defaultLanguage));
    } else if (lang !== language) {
      dispatch(setLanguage(language));
      cookies.set('lang', language, {
        path: `/${process.env.REACT_APP_REGION_DEFAULT_LOCALE}`,
      });
    }
  }

  render() {
    const { component } = this.props;
    return (
      <CrumbRoute path="/en" title="home" component={component} />
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.i18nState.lang,
  };
}

BaseRoute.contextTypes = {
  availableLanguages: PropTypes.array,
  defaultLanguage: PropTypes.string,
  cookies: PropTypes.object,
  response: PropTypes.object,
};

BaseRoute.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default withRouter(connect(mapStateToProps)(BaseRoute));
