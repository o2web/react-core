// libs
import React from 'react';
import PropTypes from 'prop-types';

// components
import { NavLink } from 'react-router-dom';
import translateRoute from '../../helpers/routes-translator';

function TranslatedNavLink({ to, children, className, onClick }, { t }) {
  return (
    <NavLink className={className} onClick={onClick} to={translateRoute(to, t)}>{children}</NavLink>
  );
}

TranslatedNavLink.contextTypes = {
  t: PropTypes.func,
};

TranslatedNavLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

TranslatedNavLink.defaultProps = {
  className: '',
  onClick: () => {},
};

export default TranslatedNavLink;
