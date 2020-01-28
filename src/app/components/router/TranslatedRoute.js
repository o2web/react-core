// libs
import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


function translatePath(path, t) {
  const translationPath = `routes.${path}`;
  const translatedPath = t(translationPath);
  return translatedPath === translationPath ? path : translatedPath;
}

function TranslatedRoute({ path, lang, ...props }, { t }) {
  const route = translatePath(path, t);
  return (
    <Route {...props} path={route} />
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

export { translatePath };
export default withRouter(connect(mapStateToProps)(TranslatedRoute));
