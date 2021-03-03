<template>
  <div class="box-trending">
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="nav-trending">
            <ul>
              <li><b-icon-lightning></b-icon-lightning></li>
              <!-- <li v-for="data in fetchedTags" :key="data.id">
                <a href="#">{{data.name}}</a>
              </li> -->
              <li>
                <nuxt-link :to="`/tag/best-lifestyle-of-2020`">Best Lifestyle Of 2020</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="`/tag/the-best-of-2021`">The best of 2021</nuxt-link>
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
        fetchedTags: 'tags/tags'
      }),
    },
    async mounted() {
      if (localStorage.getItem("guest") !== null) {
        await this.$store.dispatch('tags/fetchTags');
      }
    },
    methods: {
      
    },
  }
</script>

<style lang="scss">
  
</style>
