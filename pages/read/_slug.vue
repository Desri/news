<template>
  <div>
    <b-container class="container-detail">
      <!-- <b-row>
        <b-col cols="12" sm="8" md="8" lg="8">
          <nav aria-label="breadcrumb" class="breadcrumb-detail">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <nuxt-link v-if="fetchedDetail._embedded" :to="`/categories/${fetchedDetail._embedded[`wp:term`][0][0].slug}`">{{fetchedDetail._embedded["wp:term"][0][0].name}}</nuxt-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page" v-if="fetchedDetail.title">{{stripHtml(fetchedDetail.title.rendered)}}</li>
            </ol>
          </nav>
        </b-col>
      </b-row> -->
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="8">
          <read-artikel v-if="fetchedDetail.title" :data="fetchedDetail"></read-artikel>
          <tags :listTags="fetchedListTags"></tags>
          <hr>
          <expresion :listExpressions="expression"></expresion>
          <comments :listComments="fetchedComments"></comments>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="4">
          <sidebar-topik-terkait v-if="fetchedTopikTerkait.length != 0" :listTopikTerkait="fetchedTopikTerkait"></sidebar-topik-terkait>
          <sidebar-terpopuler></sidebar-terpopuler>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import ReadArtikel from '~/components/read/ReadArtikel';
  import Tags from '~/components/read/Tags';
  import Comments from '~/components/read/Comments';
  import Expresion from '~/components/read/Expresion';
  import SidebarTopikTerkait from '~/components/sidebar/SidebarTopikTerkait';
  import SidebarTerpopuler from '~/components/sidebar/SidebarTerpopuler';
  export default {
    components : {
      
    },
    head() {
      let dataState = this.$store.state.artikel
      let dataDetail = this.$store.state.news
      
      console.log('Ini data dari Fetch',dataDetail)

      console.log('Ini data dari State',dataState)

      // if (dataDetail._embedded[`wp:featuredmedia`]) {
      //   var urlImg = dataDetail._embedded[`wp:featuredmedia`][0].source_url
      // }else{
      //   var urlImg = require('~/assets/img/no_image.png')
      // }
      let urlPath = this.$store.state.urlPath
      return {
        titleTemplate: dataDetail + ' | %s',
        //titleTemplate: dataState.rendered + ' | %s',
        meta: [
          //{ hid : 'og:title', name: 'og:title', content: dataDetail.title.rendered },
          { property : 'og:type', content: `Article` },
          //{ property : 'og:url', content: urlPath },
          //{ property : "og:image", content: urlImg },
          { property : "og:image:width", content : "300" },
          { property : "og:image:height", content : "300" },
        ],
      }
    },
    data () {
      return {
        title : '',
        expression: {}
      }
    },

    computed: {
      ...mapGetters({
        fetchedDetail: 'artikel/detail',
        fetchedListTags: 'tags/listTag',
        fetchedComments: 'comments/listComments',
        fetchedExpressions: 'expression/countExpressions',
        fetchedTopikTerkait: 'artikel/topikTerkait'
      }),
    },

    async asyncData({$axios, params, store, error}){
      let detail = $axios.get(`/api/wp/v2/posts?slug=${params.slug}&_embed`, {
        headers: {
          'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd29yZHByZXNzLWRldmVsb3BtZW50LmNoYW5uZWwtZW5ld3MuY29tIiwiaWF0IjoxNjE0NzY1ODg1LCJuYmYiOjE2MTQ3NjU4ODUsImV4cCI6MTYxNTM3MDY4NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMiJ9fX0.3UAtY_rnfFH4RKIiRZ3SkroDdtWVPwF7aci6woFA_Mo`
        }
      })
      .then((res) => {
        console.log(res.data)
        //localStorage.setItem("guest", `${msg.token}`);
        //return this.title = res.data[0].title.rendered
        store.commit('SET_NEWS', res.data[0].title.rendered)
      })
      .catch((error) => {
        console.error(error)
      })

    },


    // async fetch({$axios, params, store, error}) {
    //   const dev = process.env.NODE_ENV !== 'production';
    //   const server = dev ? 'http://localhost:3000' : 'https://wordpress-development.channel-enews.com/wp-json';
    //   let datas = {
    //     'username' : 'dery',
    //     'password' : 'NGebbEM9dEGx60DqBJagUjyc'
    //   }
    //   const requestOptions = {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(datas)
    //   };
    //   let getTokes = await fetch(`${server}/api/jwt-auth/v1/token`, requestOptions).then(res => res.json())
    //   let urlData = `${server}/api/wp/v2/posts?slug=${params.slug}&_embed`
    //   let token = getTokes.token


    //   let dataDetail = await fetch(urlData, { headers: {"Authorization" : `Bearer ${token}`} }).then(res => res.json())
    //   store.commit('SET_NEWS', dataDetail[0])
    //   console.log(dataDetail)
    //   // let urlPath = `http://${req.headers.host}/read/${params.slug}`
    //   // store.commit('SET_URLPATH', urlPath)
    // },

    async mounted(error) {
      if (localStorage.getItem("guest") !== null) {
        let slug = this.$route.params.slug;
        await this.$store.dispatch('artikel/fetchDetailArtikel', slug)
        this.title = this.fetchedDetail.title.rendered
        await this.$store.dispatch('artikel/fetchTopikTerkait', this.fetchedDetail.id);
        await this.$store.dispatch('tags/fetchListTag', this.fetchedDetail.tags)
        let id = this.fetchedDetail.id
        await this.$store.dispatch('comments/fetchComments', id)
        await this.$store.dispatch('expression/fetchCountExpression', id)
        this.expression = this.$store.state.expression.countExpressions['Data Survey']
      }
    },
    methods: {
      
    }
  }
</script>

<style>

</style>