<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" sm="8" md="8" lg="8">
          <b-breadcrumb v-if="fetchedDetail._embedded">
            <b-breadcrumb-item href="/">
              Home
            </b-breadcrumb-item>
            <b-breadcrumb-item :href="`/category/${fetchedDetail._embedded[`wp:term`][0][0].id}`">{{fetchedDetail._embedded["wp:term"][0][0].name}}</b-breadcrumb-item>
            <b-breadcrumb-item active>{{fetchedDetail.title.rendered}}</b-breadcrumb-item>
          </b-breadcrumb>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" sm="8" md="8" lg="8">
          <div class="artikel-detail" >
            <h1 class="mt-4" v-if="fetchedDetail.title">{{fetchedDetail.title.rendered}}</h1>
            <div class="box-author">
              <b-media vertical-align="center">
                <template #aside>
                  <img src="@/assets/img/avatar.jpg" alt="Avatar" />
                </template>
                <p class="lead mb-0" v-if="fetchedDetail._embedded">Author : <span>{{fetchedDetail._embedded.author[0].name}}</span></p>
              </b-media>
            </div>
            <hr>
            <div class="content-detail">
              <p v-if="fetchedDetail.content" v-html="fetchedDetail.content.rendered"></p>
            </div>
            <hr>
          </div>
        </b-col>
        <b-col cols="12" sm="4" md="4" lg="4">
          <sidebar-topik-terkait></sidebar-topik-terkait>
          <sidebar-terpopuler></sidebar-terpopuler>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import SidebarTopikTerkait from '~/components/sidebar/SidebarTopikTerkait';
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
        fetchedDetail: 'artikel/detail'
      }),
    },
    mounted() {
      let slug = this.$route.params.slug;
      this.$store.dispatch('artikel/GET_DETAIL_ARTIKEL', slug)
    },
    methods: {
      
    }
  }
</script>

<style>

</style>