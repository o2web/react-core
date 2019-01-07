import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'redux-i18n';
import { connect } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { StaticRouter, Route } from 'react-router-dom';
import { BaseRoute, GAListener } from 'o2web-react-core';

import translations, {
  availableLanguages,
  defaultLanguage,
} from '../../config/locales/translations';
import '../../assets/styles/app.scss';
import PrimaryLayout from './layouts/PrimaryLayout';

class App extends Component {
  static propTypes = {
    request: PropTypes.object.isRequired,
  };

  getChildContext() {
    return {
      translations,
      availableLanguages,
      defaultLanguage,
    };
  }

  render() {
    const { authenticated, request, response } = this.props;
    const pathname = request.url;
    let requestUrl = request.url === '/' ? '/fr' : request.url;
    if (authenticated && pathname === '/en/login') {
      response.redirect(302, '/en/account');
      requestUrl = '/en/account';
    } else if (!authenticated && pathname === '/en/account') {
      response.redirect(302, '/en/login');
      requestUrl = '/en/login';
    } else if (!authenticated && pathname === '/fr/mon-compte') {
      response.redirect(302, '/fr/connexion');
      requestUrl = '/fr/connexion';
    } else if (authenticated && pathname === '/fr/connexion') {
      response.redirect(302, '/fr/mon-compte');
      requestUrl = '/fr/mon-compte';
    }
    return (
      <I18n translations={translations} initialLang={defaultLanguage}>
        <CookiesProvider>
          <StaticRouter location={requestUrl} context={{}}>
            <GAListener>
              <Route
                path="/"
                render={(props) => (
                  <BaseRoute
                    {...props}
                    component={PrimaryLayout}
                  />
                )}
              />
            </GAListener>
          </StaticRouter>
        </CookiesProvider>
      </I18n>
    );
  }
}

App.childContextTypes = {
  translations: PropTypes.object.isRequired,
  availableLanguages: PropTypes.array.isRequired,
  defaultLanguage: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    validatingToken: state.user.validatingToken,
  };
}

export default connect(mapStateToProps)(App);
