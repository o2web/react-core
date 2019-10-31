import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'redux-i18n';
import { CookiesProvider } from 'react-cookie';
import { StaticRouter, Route } from 'react-router-dom';
import { BaseRoute, CacheBuster, GAListener } from 'o2web-react-core';

import translations, {
  availableLanguages,
  defaultLanguage,
} from '../../config/locales/translations';
import PrimaryLayout from './layouts/PrimaryLayout';

// styles
import '../../assets/styles/app.scss';

class ServerApp extends Component {
  static propTypes = {
    request: PropTypes.object.isRequired,
    response: PropTypes.object.isRequired,
    initialRender: PropTypes.bool,
  };

  static defaultProps = {
    initialRender: false,
  };

  getChildContext() {
    const { response, initialRender } = this.props;
    return {
      initialRender,
      translations,
      availableLanguages,
      defaultLanguage,
      response,
      ssr: true,
    };
  }

  render() {
    const { request } = this.props;

    return (
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            refreshCacheAndReload();
          }

          return (
            <I18n translations={translations} initialLang={defaultLanguage}>
              <CookiesProvider>
                <StaticRouter location={request.url} context={{}}>
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
        }}
      </CacheBuster>
    );
  }
}

ServerApp.childContextTypes = {
  initialRender: PropTypes.bool,
  translations: PropTypes.object.isRequired,
  availableLanguages: PropTypes.array.isRequired,
  defaultLanguage: PropTypes.string.isRequired,
  response: PropTypes.object.isRequired,
  ssr: PropTypes.bool.isRequired,
};

export default ServerApp;
