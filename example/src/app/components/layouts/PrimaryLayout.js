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
import Login from '../user/forms/SignIn';
import MyAccount from '../user/account/MyAccount';
import ForgotPassword from '../user/forms/ForgotPassword';
import CreateAccount from '../user/forms/SignUp';
import EditPassword from '../user/forms/EditPassword';
import NewPassword from '../user/forms/NewPassword';
import AuthenticatedComponent from '../auth/AuthenticatedComponent';

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
          render={({ match, path }) =>
            <Switch>
              <Route exact path={match.url} component={Artworks} />
              <CrumbRoute path={`${path}/:artworkId`} title="artwork" component={Artwork} />
            </Switch>
          }
        />

        <CrumbRoute exact path="/en/demo" title="demo" component={DemoForm} />

        <CrumbRoute exact path="/en/login" title="login" component={AuthenticatedComponent(Login, false)} />
        <CrumbRoute exact path="/en/createAccount" title="createAccount" component={AuthenticatedComponent(CreateAccount, false)} />
        <CrumbRoute exact path="/en/forgotPassword" title="forgotPassword" component={AuthenticatedComponent(ForgotPassword, false)} />
        <CrumbRoute exact path="/en/newPassword" title="newPassword" component={AuthenticatedComponent(NewPassword, false)} />

        <CrumbRoute
          path="/en/account"
          title="account"
          render={({ match, path }) =>
            <div>
              <Route exact path={match.url} component={AuthenticatedComponent(MyAccount)} />
              <CrumbRoute path={`${path}/editPassword`} title="editPassword" component={AuthenticatedComponent(EditPassword)} />
            </div>
          }
        />
      </main>
    </div>
  );
}

export default PrimaryLayout;
