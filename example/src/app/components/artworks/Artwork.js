// libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// propTypes
import ArtworkPropTypes from './propTypes/Artwork';

// actions
import actions from '../../actions/artworks/index';

const propTypes = {
  fetchArtwork: PropTypes.func.isRequired,
  artwork: ArtworkPropTypes.isRequired,
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
