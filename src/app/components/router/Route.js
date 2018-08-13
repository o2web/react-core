// libs
import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';

// components
import { connect } from 'react-redux';
import translateRoute from '../../helpers/routes-translator';

function TranslatedRoute({ path, lang, ...props }, { t }) {
  return (
    <Route {...props} path={translateRoute(path, t)} />
  );
}

TranslatedRoute.contextTypes = {
  t: PropTypes.func,
};

TranslatedRoute.propTypes = {
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    lang: state.i18nState.lang,
  };
}

export default withRouter(connect(mapStateToProps)(TranslatedRoute));
