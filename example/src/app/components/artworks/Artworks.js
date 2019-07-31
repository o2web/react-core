// libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import actions from '../../actions/artworks/index';

const propTypes = {
  fetchArtworks: PropTypes.func.isRequired,
  artworks: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

class Artworks extends Component {
  static propTypes = propTypes;
  static defaultProps = {};

  constructor(props, { initialRender }) {
    super(props);
    console.log(initialRender);
    if (initialRender) {
      console.log('lskdfl');
      this.fetchArtworks();
    }
  }

  componentWillMount() {
    const { fetchArtworks } = this.props;
    fetchArtworks({ limit: 10 });
  }

  render() {
    const { artworks, match } = this.props;

    return (
      <ul>
        {artworks.map(({ id, name }) =>
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>,
        )}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    artworks: state.artworks.artworks,
  };
}

export default connect(mapStateToProps, actions)(Artworks);
