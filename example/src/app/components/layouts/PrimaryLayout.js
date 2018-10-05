import React from 'react';
import { Breadcrumbs } from 'react-breadcrumbs';
import { Switch } from 'react-router-dom';
import { CrumbRoute, Route, LanguageSwitcher } from 'o2web-react-core';

import NavLayout from './NavLayout';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import Artwork from '../artworks/Artwork';
import Artworks from '../artworks/Artworks';
import DemoForm from '../forms/Demo';
import User from '../user/User';
import ForgotPassword from '../user/forms/ForgotPassword';
import CreateAccount from '../user/forms/CreateAccount';
import EditPassword from '../user/forms/EditPassword';
import NewPassword from '../user/forms/NewPassword';

// assets
import logo from '../../../assets/images/logo.svg';

function PrimaryLayout() {
  return (
    <div className="primary-layout">
      <header className="app-header">
        <LanguageSwitcher />
        <NavLayout />
        <img src={logo} className="app-logo" alt="logo" width="200" />
        <h1 className="app-title">React Vanille</h1>
      </header>
      <main>
        <Breadcrumbs />
        <Route exact path="/en" component={HomePage} />
        <CrumbRoute exact path="/en/about" title="about" component={AboutPage} />
        <CrumbRoute
          path="/en/artworks"
          title="artworks"
          render={({ match }) =>
            <Switch>
              <Route exact path={match.url} component={Artworks} />
              <CrumbRoute path={`${match.url}/:artworkId`} title="artwork" component={Artwork} />
            </Switch>
          }
        />

        <CrumbRoute exact path="/en/demo" title="demo" component={DemoForm} />

        <CrumbRoute
          path="/en/account"
          title="account"
          render={({ match, path }) =>
            <div>
              <Route exact path={match.url} component={User} />
              <CrumbRoute path={`${path}/createAccount`} title="createAccount" component={CreateAccount} />
              <CrumbRoute path={`${path}/editPassword`} title="editPassword" component={EditPassword} />
              <CrumbRoute path={`${path}/forgotPassword`} title="forgotPassword" component={ForgotPassword} />
              <CrumbRoute path={`${path}/newPassword`} title="newPassword" component={NewPassword} />
            </div>
          }
        />
      </main>
    </div>
  );
}

export default PrimaryLayout;
