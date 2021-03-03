<template>
  <section id="main">
    <b-container>
      <b-row>
        <b-col cols="12" sm="8" md="8" lg="8">
          <div class="box-page">
            <h2 class="text-muted text-center" style="font-size: 4rem;padding-top: 10rem;">Box Page</h2>
          </div>
        </b-col>
        <b-col cols="12" sm="4" md="4" lg="4">
          <sidebar-terpopuler></sidebar-terpopuler>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import SidebarTerpopuler from '~/components/sidebar/SidebarTerpopuler';
  export default {
    components : {
      
    },
    data () {
      return {
        
      }
    },
    computed: {
      ...mapGetters({
        fetchedCategory: 'artikel/category'
      }),
    },
    async mounted() {
      let slug = this.$route.params.slug;
      await this.$store.dispatch('artikel/fetchCategory', slug)
    },
    methods: {
      
    }
  }
</script>

<style>

</style>