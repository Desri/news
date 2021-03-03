export default {
  async fetchGuestToken({ commit }, payload) {
    try {
      await $.ajax({
        type: "POST",
        url: "/api/jwt-auth/v1/token",
        data: payload,
        success: function(msg){
          localStorage.setItem("guest", `${msg.token}`);
          window.location.reload(true);
        }
      });
    } catch (error) {
      throw error
    }
  },
};