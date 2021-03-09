<template>
  <div class="box-trending">
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="nav-trending">
            <ul>
              <li><b-icon-lightning></b-icon-lightning></li>
              <li v-for="data in fetchedTopTopik" :key="data.ID">
                <nuxt-link :to="`/tag/${data.slug}`">{{data.title}}</nuxt-link>
              </li>
              <li><b-icon-lightning></b-icon-lightning></li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
        fetchedTags: 'tags/tags',
        fetchedTopTopik: 'menu/topTopic'
      }),
    },
    async mounted() {
      if (localStorage.getItem("guest") !== null) {
        await this.$store.dispatch('tags/fetchTags');
        await this.$store.dispatch('menu/fetchTopTopic');
      }
    },
    methods: {
      
    },
  }
</script>

<style lang="scss">
  
</style>
