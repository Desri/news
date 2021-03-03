<template>
  <div class="populer-box sticky-top">
    <div class="populer-list">
      <div class="heading-article">
        <div class="heading-left float-left">
          <span class="baging"></span>
          <h3>Terpopuler</h3>
        </div>
      </div>
      <ul>
        <li v-for="(data, index) in fetchedPopular" :key="data.id">
          <a :href="`/read/${data.post_name}`">
            <div class="num">
              <span>{{index+1}}</span>
            </div>
            <p>{{data.post_title}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    components : {

    },
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters({
        fetchedPopular: 'artikel/popular'
      }),
    },
    async mounted() {
      if (localStorage.getItem("guest") !== null) {
        await this.$store.dispatch('artikel/fetchPopular');
      }
    },
    methods: {
      
    },
  }
</script>

<style lang="scss">
  
</style>
