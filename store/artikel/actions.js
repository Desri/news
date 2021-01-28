export default {
  async fetchArtikels({ commit }) {
    try {
      const response = await this.$axios.$get(`/wp-json/wp/v2/posts?_embed`)
      commit('SET_ARTIKELS', response)
      //console.log(response[0]._embedded.["wp:term"][0][0].name)
    } catch (error) {
      throw error
    }
  },
  async fetchDetailArtikel({ commit }, slug) {
    try {
      const response = await this.$axios.$get(`/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      commit('SET_DETAIL', response[0])
    } catch (error) {
      throw error
    }
  },
  async fetchCategory({ commit }, slug) {
    try {
      const response = await this.$axios.$get(`/wp-json/wp/v2/posts?categories=${slug}&_embed`)
      commit('SET_CATEGORY', response)
    } catch (error) {
      throw error
    }
  }
};