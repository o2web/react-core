// libs
import React from 'react';
import PropTypes from 'prop-types';

// components
import { NavLink, withRouter } from 'react-router-dom';
import translateRoute from '../../helpers/routes-translator';

function TranslatedNavLink({ to, children, ...props }, { t }) {
  return (
    <NavLink {...props} to={translateRoute(to, t)}>{children}</NavLink>
  );
}

TranslatedNavLink.contextTypes = {
  t: PropTypes.func,
};

TranslatedNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(TranslatedNavLink);
