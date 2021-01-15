export const state = () => ({
    artikels: {},
    detail: {},
    category: {},
});

export const getters =  {
  artikels(state) {
    return state.artikels;
  },
  detail(state) {
    return state.detail;
  },
  category(state) {
    return state.category;
  }
};

export const mutations = {
  SET_ARTIKELS(state, data) {
    state.artikels = data
  },
  SET_DETAIL(state, data) {
    state.detail = data
  },
  SET_CATEGORY(state, data) {
    state.category = data
  }
};

export const actions =  {
  async GET_ARTIKELS({ commit }) {
    try {
      const response = await this.$axios.$get(`api/wp/v2/posts?_embed`)
      commit('SET_ARTIKELS', response)
      //console.log(response[0]._embedded.["wp:term"][0][0].name)
    } catch (error) {
      throw error
    }
  },
  async GET_DETAIL_ARTIKEL({ commit }, slug) {
    try {
      const response = await this.$axios.$get(`api/wp/v2/posts?slug=${slug}&_embed`)
      commit('SET_DETAIL', response[0])
    } catch (error) {
      throw error
    }
  },
  async GET_CATEGORY({ commit }, slug) {
    try {
      const response = await this.$axios.$get(`api/wp/v2/posts?category=${slug}&_embed`)
      commit('SET_CATEGORY', response)
    } catch (error) {
      throw error
    }
  },
};