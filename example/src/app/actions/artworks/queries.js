export default {
  fetchArtwork: `
    query($id: ID!) {
      artwork(id: $id) {
        id
        name
        description
      }
    }
  `,
  fetchArtworks: `
    query($limit: Int) {
      artworks(limit: $limit) {
        artworks {
          id
          name
          description
        }
      }
    }
  `,
};
