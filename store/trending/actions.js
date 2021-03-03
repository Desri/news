export default {
  async fetchTrendingTopik({ commit }) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/indonews/v1/trending-topics`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_TRENDING_TOPIK', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
};