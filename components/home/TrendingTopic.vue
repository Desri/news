<template>
  <div>
    <div class="sidebar-top">
      <div class="img-sidebar-top">
        <AdsRight />
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
  import AdsRight from '~/components/ads/AdsRight';
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
