// libs
import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

class GAListener extends Component {

  constructor() {
    super();
    this.sendPageView = this.sendPageView.bind(this);
  }

  componentDidMount() {
    const { router: { history }} = this.context;
    const analyticsCode = process.env.REACT_APP_GOOGLE_ANALYTICS_UA;

    ReactGA.initialize(analyticsCode, { debug: false });
    ReactGA.pageview(window.location.pathname + window.location.search);

    this.sendPageView(history.location);
    history.listen(this.sendPageView);
  }

  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
    return this;
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

GAListener.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

GAListener.contextTypes = {
  router: PropTypes.object,
};

export default withRouter(connect()(GAListener));
