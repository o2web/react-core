export default {
  getCurrentUser: `
    query($id: ID) {
      artist(id: $id) {
        name
      }
    }
  `,
};
