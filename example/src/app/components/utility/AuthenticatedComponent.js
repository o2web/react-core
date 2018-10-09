// Libs
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translateRoute } from 'o2web-react-core';

class UnauthenticatedComponent extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    authenticated: PropTypes.bool.isRequired,
    authRequired: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  };

  static defaultProps = {
    authRequired: true,
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  componentWillMount() {
    const { authenticated, authRequired, history } = this.props;
    const { t } = this.context;
    window.scrollTo(0, 0);

    // redirect to login if user is not authenticated
    if (authenticated && !authRequired) {
      history.push(translateRoute('/en/account', t));
    } else if (!authenticated && authRequired) {
      history.push(translateRoute('/en/login', t));
    }
  }

  render() {
    const { children } = this.props;

    return (
      children
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
  };
}

export default withRouter(connect(mapStateToProps)(UnauthenticatedComponent));
