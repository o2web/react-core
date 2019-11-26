import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'redux-i18n';
import { CookiesProvider } from 'react-cookie';
import { StaticRouter, Route } from 'react-router-dom';
import { GAListener, GTManager } from 'o2web-react-core';

import translations, {
  availableLanguages,
  defaultLanguage,
} from '../../config/locales/translations';
import '../../assets/styles/app.scss';
import PrimaryLayout from './layouts/PrimaryLayout';

class ServerApp extends Component {
  static propTypes = {
    request: PropTypes.object.isRequired,
    response: PropTypes.object.isRequired,
    initialRender: PropTypes.bool,
    customStore: PropTypes.object,
  };

  static defaultProps = {
    initialRender: false,
    customStore: {},
  };

  getChildContext() {
    const { response, request, initialRender, customStore } = this.props;
    return {
      initialRender,
      translations,
      availableLanguages,
      defaultLanguage,
      response,
      request,
      customStore,
      ssr: true,
    };
  }

  render() {
    const { request } = this.props;
    return (
      <I18n translations={translations} initialLang={defaultLanguage}>
        <CookiesProvider>
          <StaticRouter location={request.url} context={{}}>
            <GAListener>
              <GTManager>
                <Route
                  path="/"
                  render={(props) =>
                    <Route
                      {...props}
                      component={PrimaryLayout}
                    />
                  }
                />
              </GTManager>
            </GAListener>
          </StaticRouter>
        </CookiesProvider>
      </I18n>
    );
  }
}

ServerApp.childContextTypes = {
  initialRender: PropTypes.bool,
  customStore: PropTypes.object,
  translations: PropTypes.object.isRequired,
  availableLanguages: PropTypes.array.isRequired,
  defaultLanguage: PropTypes.string.isRequired,
  response: PropTypes.object.isRequired,
  request: PropTypes.object.isRequired,
  ssr: PropTypes.bool.isRequired,
};

export default ServerApp;
