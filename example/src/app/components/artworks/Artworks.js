// libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// propTypes
import ArtworkPropTypes from './propTypes/Artwork';

// actions
import actions from '../../actions/artworks/index';

const propTypes = {
  fetchArtworks: PropTypes.func.isRequired,
  artworks: PropTypes.arrayOf(ArtworkPropTypes).isRequired,
  match: PropTypes.object.isRequired,
};

const contextTypes = {
  initialRender: PropTypes.bool,
};

class Artworks extends Component {
  static propTypes = propTypes;
  static contextTypes = contextTypes;
  static defaultProps = {};

  constructor(props, { initialRender }) {
    super(props);
    if (initialRender) {
      props.fetchArtworks();
    }
  }

  componentWillMount() {
    const { fetchArtworks } = this.props;
    fetchArtworks({ limit: 10 });
  }

  render() {
    const { artworks, match } = this.props;

    return (
      <div>
        <Helmet>
          <title>Homepage</title>
          <meta name="description" content="Description - Oeuvres" />
          <meta property="og:title" content="Og - Oeuvres" />
          <meta name="og:description" content="OG - Oeuvres description" />
          <meta name="og:image" content="" />
          <meta name="twitter:title" content="twitter - Oeuvres title" />
          <meta name="twitter:description" content="twitter - Oeuvres description" />
          <meta name="twitter:image" content="" />
        </Helmet>
        <h2>Oeuvres</h2>
        <ul>
          {artworks.map(({ id, name }) =>
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>,
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artworks: state.artworks.artworks,
  };
}

export default connect(mapStateToProps, actions)(Artworks);
