import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import translateRoute from '../../helpers/routes-translator';

class ValidateRoutes extends Component {
  componentDidMount() {
    this.validateCurrentPath();
  }

  validateCurrentPath() {
    const { notFoundPath, history } = this.props;
    const { t } = this.context;
    const pathExist = this.currentPathExist();
    if (!pathExist) {
      const notFoundRoute = translateRoute(notFoundPath, t);
      history.push(notFoundRoute);
    }
  }

  currentPathExist() {
    const { children, location: { pathname: currentPath } } = this.props;
    const { t } = this.context;
    const translatedPaths = children.map(({ props: { path, exact, hasChildren, withParams } }) => ({
      translatedPath: translateRoute(path, t),
      exact: !exact ? false : exact,
      hasChildren: !hasChildren ? false : hasChildren,
      withParams: !withParams ? false : withParams,
    }));
    const isValidPath = translatedPaths.map(
      ({ translatedPath, exact, hasChildren, withParams }) => {
        if (
          (exact && translatedPath === currentPath)
          || (hasChildren && currentPath.includes(`${translatedPath}/`))
          || (withParams && currentPath.includes(`${translatedPath.substr(0, translatedPath.lastIndexOf(':'))}`))
          || (currentPath === translatedPath || currentPath === `${translatedPath}/`)
        ) {
          return true;
        }
        return false;
      });
    return (isValidPath.indexOf(true) > -1);
  }

  render() {
    const { children } = this.props;
    return (
      children
    );
  }
}

ValidateRoutes.contextTypes = {
  t: PropTypes.func,
};

ValidateRoutes.defaultProps = {
  children: false,
  notFoundPath: '/en/notFound',
};

ValidateRoutes.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.bool]),
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  notFoundPath: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    lang: state.i18nState.lang,
  };
}

export default withRouter(connect(mapStateToProps)(ValidateRoutes));
