// libs
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// components

class Redirector extends Component {
  constructor(props) {
    super();
    const { redirects, history: { location: { pathname } }, history } = props;
    if (redirects.length !== 0) {
      const currentRouteRedirect = redirects
        .sort((x, y) => {
          if (x.parent && y.parent) { return 0; }
          if (!x.parent) { return -1; }
          return 1;
        })
        .find((path) => {
          if (path.parent && (pathname.startsWith(`${path.from}/`) || (pathname.endsWith(path.from) && pathname.startsWith(path.from)))) {
            return path;
          }
          if (pathname === path.from) {
            return path;
          }
          return false;
        });
      if (currentRouteRedirect) {
        if (currentRouteRedirect.parent) {
          const newPath = pathname.replace(currentRouteRedirect.from, currentRouteRedirect.to);
          history.push(newPath);
        } else {
          history.push(currentRouteRedirect.to);
        }
      }
    }
  }

  componentDidUpdate() {
    const { redirects, history: { location: { pathname } }, history } = this.props;
    if (redirects.length !== 0) {
      const currentRouteRedirect = redirects
        .sort((x, y) => {
          if (x.parent && y.parent) { return 0; }
          if (!x.parent) { return -1; }
          return 1;
        })
        .find((path) => {
          if (path.parent && (pathname.startsWith(`${path.from}/`) || (pathname.endsWith(path.from) && pathname.startsWith(path.from)))) {
            return path;
          }
          if (pathname === path.from) {
            return path;
          }
          return false;
        });
      if (currentRouteRedirect) {
        if (currentRouteRedirect.parent) {
          const newPath = pathname.replace(currentRouteRedirect.from, currentRouteRedirect.to);
          history.push(newPath);
        } else {
          history.push(currentRouteRedirect.to);
        }
      }
    }
  }

  render() {
    const { children } = this.props;
    return (
      children
    );
  }
}

Redirector.contextTypes = {
  t: PropTypes.func,
};

Redirector.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.bool]),
  history: PropTypes.object.isRequired,
  redirects: PropTypes.array.isRequired,
};

Redirector.defaultProps = {
  children: false,
};

export default withRouter(connect()(Redirector));
