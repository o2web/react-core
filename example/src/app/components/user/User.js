// libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import actions from '../../actions/user/';

// components
import Login from './forms/Login';
import MyAccount from './account/MyAccount';

const propTypes = {
  // getCurrentUser: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};


class User extends Component {
  static propTypes = propTypes;

  componentWillMount() {
    window.scrollTo(0, 0);
    // const { getCurrentUser } = this.props;
    // getCurrentUser();
  }

  render() {
    const { authenticated } = this.props;
    return authenticated ? <MyAccount /> : <Login />;
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
  };
}

export default connect(mapStateToProps, actions)(User);
