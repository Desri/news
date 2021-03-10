export default {
  async fetchCountExpression({ commit }, id) {
    try {
      await $.ajax({
        type: "GET",
        url: `/wp-json/indonews/v1/get-survey-post/${id}`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_COUNT_EXPRESSIONS', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchExpression({ commit }, payload) {
    try {
      await $.ajax({
        type: "POST",
        url: `/wp-json/indonews/v1/survey-post/${payload.post}`,
        data: {response_status: payload.response_status},
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