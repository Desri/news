export default {
    async fetchAds({ commit }) {
        try {
        await $.ajax({
          type: "GET",
          url: `/wp-json/indonews/v1/ads`,
          beforeSend: function(xhr){
            xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
          },
          success: function(response){
            commit('SET_ADS', response)
          }
        });
      } catch (error) {
        throw error
      }
    },
  };