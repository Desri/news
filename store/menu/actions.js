export default {
  async fetchMenus({ commit }) {
  	try {
      await $.ajax({
        type: "GET",
        url: `/api/indonews/v1/menus`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_MENUS', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
};