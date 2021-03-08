export default {
  async fetchArtikels({ commit }, params) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/wp/v2/posts?per_page=10&page=${params.page}&_embed`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_ARTIKELS', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchDetailArtikel({ commit }, slug) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/wp/v2/posts?slug=${slug}&_embed`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_DETAIL', response[0])
          $.ajax({
            type: "GET",
            url: `/api/indonews/v1/viewspost/${response[0].id}`,
            beforeSend: function(xhr){
              xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
            },
            success: function(response){
            
            }
          });
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchPopular({ commit }) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/indonews/v1/popular-posts`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_POPULAR', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchTopikTerkait({ commit }, id_post) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/indonews/v1/related-posts/${id_post}`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_TOPIK_TERKAIT', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchCategory({ commit }, params) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/indonews/v1/posts-category/${params.slug}/1`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_CATEGORY', response[0])
        }
      });
    } catch (error) {
      throw error
    }
  },
  // async fetchCategory({ commit }, slug) {
  //   try {
  //     await $.ajax({
  //       type: "GET",
  //       url: `/api/indonews/v1/posts-category/${slug}/1`,
  //       beforeSend: function(xhr){
  //         xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
  //       },
  //       success: function(response){
  //         commit('SET_CATEGORY', response[0])
  //       }
  //     });
  //   } catch (error) {
  //     throw error
  //   }
  // },
  async fetchReccomend({ commit }, slug) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/indonews/v1/recommend/${slug}`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_RECCOMEND', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchJudulCategory({ commit }, slug) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/wp/v2/categories/${slug}`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_JUDUL_CATEGORY', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchHeadline({ commit }) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/indonews/v1/headline`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_HEADLINE', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
  async fetchSubHeadline({ commit }) {
    try {
      await $.ajax({
        type: "GET",
        url: `/api/indonews/v1/subheadline`,
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
        },
        success: function(response){
          commit('SET_SUBHEADLINE', response)
        }
      });
    } catch (error) {
      throw error
    }
  },
};