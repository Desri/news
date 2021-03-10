export default {
  async fetchComments({ commit }, id) {
    try {
      await $.ajax({
        type: "GET",
        url: `/wp-json/wp/v2/comments?post=${id}`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_LIST_COMMENTS', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchSubmitComment({ commit }, payload) {
    try {
      await $.ajax({
        type: "POST",
        url: `/wp-json/wp/v2/comments`,
        data: payload,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          
        }
      });
    } catch (error) {
      throw error
    }
  },
};