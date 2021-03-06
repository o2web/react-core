// libs
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeLanguageSwitcher } from '../../helpers/routes-translator';

class LanguageSwitcher extends Component {
  state = { otherLanguages: [] };

  componentDidMount() {
    const { location } = this.props;

    this.setOtherLanguagesFromUrl(location);
  }

  componentDidUpdate(prevProps) {
    const { lang, location, location: { pathname } } = this.props;
    const { lang: prevLang, location: { pathname: prevPathname } } = prevProps;

    if (lang !== prevLang || pathname !== prevPathname) {
      this.setOtherLanguagesFromUrl(location);
    }
  }

  setOtherLanguagesFromUrl({ pathname }) {
    const { lang } = this.props;
    const { translations, availableLanguages } = this.context;

    this.setState({
      otherLanguages: availableLanguages
        .filter(language => language !== lang)
        .map(language => ({
          language,
          pathname: routeLanguageSwitcher(pathname, translations, lang, language),
        })),
    });
  }

  render() {
    const { className } = this.props;
    const { otherLanguages } = this.state;
    const { t } = this.context;

    return (
      <nav className={className}>
        <ul className={`links ${className}__links`}>
          {otherLanguages.map(({ language, pathname }) => (
            <li className={`link ${className}__link`} key={language}>
              <NavLink to={pathname}>{t(`languageSwitcher.${language}`)}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.i18nState.lang,
  };
}

LanguageSwitcher.contextTypes = {
  t: PropTypes.func,
  translations: PropTypes.object.isRequired,
  availableLanguages: PropTypes.array.isRequired,
  defaultLanguage: PropTypes.string.isRequired,
};

LanguageSwitcher.defaultProps = {
  className: 'nav',
};

LanguageSwitcher.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps)(LanguageSwitcher));
