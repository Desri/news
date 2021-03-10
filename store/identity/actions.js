export default {
  async fetchIdentity({ commit }) {
  	try {
      await $.ajax({
        type: "GET",
        url: `/wp-json/indonews/v1/identity`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_IDENTITY', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
};