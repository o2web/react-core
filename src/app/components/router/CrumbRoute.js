import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Breadcrumb } from 'react-breadcrumbs';
import { Route, withRouter } from 'react-router-dom';
import translateRoute from '../../helpers/routes-translator';
import translateBreadcrumb from '../../helpers/breadcrumbs-translator';

function CrumbRoute({ component: Component, path, title, render, ...props }, { t }) {
  return (
    <Route
      {...props}
      path={translateRoute(path, t)}
      render={(routeProps) => (
        <Breadcrumb data={{
          title: translateBreadcrumb(title, t),
          pathname: routeProps.match.url,
        }}
        >
          {Component
            ? <Component {...routeProps} />
            : render({ ...routeProps, path })
          }
        </Breadcrumb>
      )}
    />
  );
}

CrumbRoute.contextTypes = {
  t: PropTypes.func,
};

CrumbRoute.defaultProps = {
  component: false,
  render: false,
};

CrumbRoute.propTypes = {
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.bool]),
  render: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.bool]),
};

function mapStateToProps(state) {
  return {
    lang: state.i18nState.lang,
  };
}

export default withRouter(connect(mapStateToProps)(CrumbRoute));
