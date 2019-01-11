// Libs
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translateRoute } from 'o2web-react-core';

export default function (ComposedComponent, authRequired = true) {
  class AuthenticatedComponent extends Component {
    static propTypes = {
      history: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      authenticated: PropTypes.bool.isRequired,
      validatingToken: PropTypes.bool.isRequired,
    };

    static contextTypes = {
      t: PropTypes.func,
      response: PropTypes.object.isRequired,
    };

    componentWillMount() {
      window.scrollTo(0, 0);
      this.validateLocation();
    }

    componentDidUpdate() {
      this.validateLocation();
    }

    validateLocation() {
      const { authenticated, history, validatingToken, location: { pathname } } = this.props;
      const { response, t } = this.context;


      if (!validatingToken) {
        const accountRoute = translateRoute('/en/account', t);
        const signInRoute = translateRoute('/en/login', t);

        // redirect to login if user is not authenticated
        if (authenticated && !authRequired && pathname !== accountRoute) {
          if (response) {
            response.redirect(accountRoute);
          } else {
            history.push(accountRoute);
          }
        } else if (!authenticated && authRequired && pathname !== signInRoute) {
          if (response) {
            response.redirect(accountRoute);
          } else {
            history.push(signInRoute);
          }
        }
      }
    }

    canRenderComponent() {
      const { authenticated, validatingToken, location: { pathname } } = this.props;
      const { t } = this.context;

      if (validatingToken) {
        return false;
      }

      const accountRoute = translateRoute('/en/account', t);
      if (authenticated && !authRequired && pathname !== accountRoute) {
        return false;
      }

      const signInRoute = translateRoute('/en/login', t);
      if (!authenticated && authRequired && pathname !== signInRoute) {
        return false;
      }

      return true;
    }

    render() {
      if (this.canRenderComponent()) {
        return (
          <ComposedComponent />
        );
      }

      return null;
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.user.authenticated,
      validatingToken: state.user.validatingToken,
    };
  }

  return withRouter(connect(mapStateToProps)(AuthenticatedComponent));
}
