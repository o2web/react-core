import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'redux-i18n';
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
    const { request } = this.props;
    const requestUrl = request.url === '/' ? '/fr' : request.url;
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

export default App;
