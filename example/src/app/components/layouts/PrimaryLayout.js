import React from 'react';
import { Breadcrumbs } from 'react-breadcrumbs';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { CrumbRoute, Route, LanguageSwitcher, ValidateRoutes } from 'o2web-react-core';

import NavLayout from './NavLayout';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import Artwork from '../artworks/Artwork';
import Artworks from '../artworks/Artworks';
import DemoForm from '../forms/Demo';
import AuthenticatedComponent from '../auth/AuthenticatedComponent';
import SignIn from '../user/forms/SignIn';
import SignUp from '../user/forms/SignUp';
import MyAccount from '../user/account/MyAccount';
import ForgotPassword from '../user/forms/ForgotPassword';
import ResetPassword from '../user/forms/ResetPassword';
import EditAccount from '../user/forms/EditAccount';
import NotFound from '../pages/NotFound';

// assets
// import logo from '../../../assets/images/logo.svg';

function PrimaryLayout() {
  return (
    <div className="primary-layout">
      <header className="app-header">
        <LanguageSwitcher />
        <NavLayout />
        {/* <img src={logo} className="app-logo" alt="logo" width="200" /> */}
        <h1 className="app-title">React Vanille</h1>
      </header>
      <main>
        <Breadcrumbs />
        <ValidateRoutes notFoundPath="/en/notFound">
          <Route
            exact
            path="/"
            render={() => (
              <Redirect
                push
                to="/en"
              />
            )}
          />
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
          <Route exact path="/en" component={HomePage} />
          <CrumbRoute exact path="/en/about" title="about" component={AboutPage} />
          <CrumbRoute
            path="/en/artworks"
            title="artworks"
            hasChildren
            render={({ match }) =>
              <Switch>
                <Route exact path={match.url} component={Artworks} />
                <CrumbRoute path={`${match.url}/:artworkId`} title="artwork" component={Artwork} />
              </Switch>
            }
          />

          <CrumbRoute exact path="/en/demo" title="demo" component={DemoForm} />

          <CrumbRoute exact path="/en/login" title="login" component={AuthenticatedComponent(SignIn, false)} />
          <CrumbRoute exact path="/en/createAccount" title="createAccount" component={AuthenticatedComponent(SignUp, false)} />
          <CrumbRoute exact path="/en/forgotPassword" title="forgotPassword" component={AuthenticatedComponent(ForgotPassword, false)} />
          <CrumbRoute exact path="/en/resetPassword/:token" withParams title="resetPassword" component={AuthenticatedComponent(ResetPassword, false)} />

          <CrumbRoute
            path="/en/account"
            title="account"
            hasChildren
            render={({ match, path }) =>
              <div>
                <Route exact path={match.url} component={AuthenticatedComponent(MyAccount)} />
                <CrumbRoute path={`${path}/editAccount`} title="editAccount" component={AuthenticatedComponent(EditAccount)} />
              </div>
            }
          />
          <Route
            path="/en/notFound"
            component={NotFound}
          />
        </ValidateRoutes>
      </main>
    </div>
  );
}

export default PrimaryLayout;
