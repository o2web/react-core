// libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// actions
import actions from '../../actions/artworks/index';

const propTypes = {
  fetchArtwork: PropTypes.func.isRequired,
  artwork: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

class Artwork extends Component {
  static propTypes = propTypes;
  static defaultProps = {};

  componentWillMount() {
    const { fetchArtwork, match: { params: { artworkId } } } = this.props;
    fetchArtwork({ id: artworkId });
  }

  render() {
    const { artwork: { name } } = this.props;

    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artwork: state.artwork.artwork,
  };
}

export default connect(mapStateToProps, actions)(Artwork);
