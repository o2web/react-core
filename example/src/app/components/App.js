import React from 'react';
import I18n from 'redux-i18n';
import { CookiesProvider } from 'react-cookie';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route } from 'react-router-dom';
import { BaseRoute } from 'o2web-react-core';
import translations, {
  availableLanguages,
  defaultLanguage,
} from '../../config/locales/translations';

import './../../assets/styles/app.scss';
import PrimaryLayout from './layouts/PrimaryLayout';

export default () => (
  <CookiesProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>O2 Web React Core</title>
      <link rel="canonical" href="" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />

      {/* Opengraph */}
      <meta property="og:title" content="" />
      <meta property="og:type" content="" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />

      {/* Twitter */}
      <meta name="twitter:site" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />

    </Helmet>
    <I18n translations={translations} initialLang={defaultLanguage}>
      <BrowserRouter>
        <Route
          path="/"
          render={(props) =>
            <BaseRoute
              {...props}
              availableLanguages={availableLanguages}
              defaultLanguage={defaultLanguage}
              component={PrimaryLayout}
            />
          }
        />
      </BrowserRouter>
    </I18n>
  </CookiesProvider>
);
