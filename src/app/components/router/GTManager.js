// libs
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TagManager from 'react-gtm-module';

class GTManager extends Component {
  componentDidMount() {
    const tagManagerId = process.env.REACT_APP_TAG_MANAGER_ID;
    const tagManagerArgs = {
      gtmId: tagManagerId,
    };

    TagManager.initialize(tagManagerArgs);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

GTManager.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

GTManager.contextTypes = {
  router: PropTypes.object,
};

export default withRouter(connect()(GTManager));
