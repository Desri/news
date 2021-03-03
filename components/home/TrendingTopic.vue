<template>
  <div>
    <div class="sidebar-top">
      <div class="img-sidebar-top">
        <img src="@/assets/img/img-sidebar.jpg" alt="ads top">
      </div>
      <div class="trending-box sticky-top">
        <div class="trending-list">
          <span class="baging"></span>
          <h3>Trending Topic</h3>
          <ul>
            <li v-for="data in fetchTrendingTopik" :key="data.term_id">
              <nuxt-link :to="`/tag/${data.slug}`"> <span>#</span> {{data.name}}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    components : {

    },
    computed: {
      ...mapGetters({
        fetchTrendingTopik: 'trending/trendingTopik'
      }),
    },
    async mounted() {
      if (localStorage.getItem("guest") !== null) {
        await this.$store.dispatch('trending/fetchTrendingTopik');
      }
    },
    methods: {
      
    },
  }
</script>

<style lang="scss">
  
</style>
