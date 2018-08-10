// libs
import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

// components
import { NavLink, withRouter } from 'react-router-dom';
import translateRoute from '../../helpers/routes-translator';

function TranslatedNavLink({ to, children, lang }) {
  return (
    <NavLink to={translateRoute(to, lang)}>{children}</NavLink>
  );
}

function mapStateToProps(state) {
  return {
    lang: state.i18nState.lang,
  };
}

TranslatedNavLink.propTypes = {
  to: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
  lang: Proptypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps)(TranslatedNavLink));
