export default {
  async fetchTags({ commit }) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/wp/v2/tags`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_TAGS', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchDetailTag({ commit }, slug) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/wp/v2/tags/${slug}`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_DETAIL_TAG', response[0])
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchListTag({ commit }, id) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/wp/v2/tags?include=${id}`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_LIST_TAG', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchFilterTags({ commit }, params) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/indonews/v1/posts-tag-slug/${params.slug}/${params.page}`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_FILTER_TAGS', response[0])
        }
      });
    } catch (error) {
      throw error
    }
  },
};