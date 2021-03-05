<template>
  <div>
    <b-container class="container-detail">
      <b-row>
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
      </b-row>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="8">
          <read-artikel v-if="fetchedDetail.title" :data="fetchedDetail"></read-artikel>
          <tags :listTags="fetchedListTags"></tags>
          <hr>
          <!-- <expresion :listExpressions="expression"></expresion> -->
          <div class="list-expresion my-4">
            <ul>
              <li>
                <a href="javascript:void(0)" @click="onShowNitice('suka', 'srv_good')">
                  <img src="@/assets/img/emoticon/suka.svg" class="img-fluid">
                  <p class="percent mb-0">{{parseFloat(expression_good).toFixed(1)}}%</p>
                  <p class="mb-0">Suka</p>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="onShowNitice('lucu', 'srv_v_good')">
                  <img src="@/assets/img/emoticon/lucu.svg" class="img-fluid">
                  <p class="percent mb-0">{{parseFloat(expression_very_good).toFixed(1)}}%</p>
                  <p class="mb-0">Lucu</p>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="onShowNitice('kaget', 'srv_avg')">
                  <img src="@/assets/img/emoticon/kaget.svg" class="img-fluid">
                  <p class="percent mb-0">{{parseFloat(expression_avg).toFixed(1)}}%</p>
                  <p class="mb-0">Kaget</p>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="onShowNitice('sedih', 'srv_poor')">
                  <img src="@/assets/img/emoticon/sedih.svg" class="img-fluid">
                  <p class="percent mb-0">{{parseFloat(expression_poor).toFixed(1)}}%</p>
                  <p class="mb-0">Sedih</p>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="onShowNitice('marah', 'srv_v_poor')">
                  <img src="@/assets/img/emoticon/marah.svg" class="img-fluid">
                  <p class="percent mb-0">{{parseFloat(expression_very_poor).toFixed(1)}}%</p>
                  <p class="mb-0">Marah</p>
                </a>
              </li>
            </ul>
          </div>
          <b-modal ref="modalNotice" id="modalNotice" centered hide-header hide-footer>
            <div class="text-expression text-center py-4">
              <p class="mb-0">Apakah Anda yakin {{expression}} dengan artikel ini?</p>
              <div class="box-btns mt-4">
                <button class="yes" @click="onExpresion(val)">
                  YA
                </button>
                <button class="no" @click="hideModal">
                  TIDAK
                </button>
              </div>
            </div>
          </b-modal>
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
  //import Expresion from '~/components/read/Expresion';
  import SidebarTopikTerkait from '~/components/sidebar/SidebarTopikTerkait';
  import SidebarTerpopuler from '~/components/sidebar/SidebarTerpopuler';
  export default {
    components : {
      
    },
    head() {
      let dataDetail = this.$store.state.news
      let urlPath = this.$store.state.urlPath
      if (dataDetail._embedded[`wp:featuredmedia`]) {
        var urlImg = dataDetail._embedded[`wp:featuredmedia`][0].source_url
      }else{
        var urlImg = require('~/assets/img/no_image.png')
      }
      return {
        titleTemplate: dataDetail.title.rendered + ' | %s',
        meta: [
          { hid : 'og:title', name: 'og:title', content: dataDetail.title.rendered },
          { property : 'og:type', content: `Article` },
          { property : "og:image", content: urlImg },
          { property : "og:image:width", content : "300" },
          { property : "og:image:height", content : "300" },
        ],
      }
    },
    data () {
      return {
        title : '',
        expression: {},
        expression_good: 0,
        expression_very_good: 0,
        expression_avg: 0,
        expression_poor: 0,
        expression_very_poor: 0,
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

    async fetch({$axios, params ,store, error, req, $http}) {
      const dev = process.env.NODE_ENV !== 'production';
      //const server = dev ? 'http://localhost:3000' : process.env.BASE_API_URL;
      const server = process.env.BASE_API_URL;
      // const server = dev ? 'http://localhost:3000' : 'https://wordpress-development.channel-enews.com/wp-json';
      let datas = {
        'username' : 'dery',
        'password' : 'NGebbEM9dEGx60DqBJagUjyc'
      }
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datas)
      };
      //let getTokes = await fetch(server+`/api/jwt-auth/v1/token`, requestOptions).then(res => res.json())
      //let urlData = server+`/api/wp/v2/posts?slug=${params.slug}&_embed`
      let getTokes = await fetch(server+`jwt-auth/v1/token`, requestOptions).then(res => res.json())
      let urlData = server+`wp/v2/posts?slug=${params.slug}&_embed`
      let token = getTokes.token
      let dataDetail = await fetch(urlData, { headers: {"Authorization" : `Bearer ${token}`} }).then(res => res.json())
      store.commit('SET_NEWS', dataDetail[0])
    },

    async mounted() {
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
        this.expression_good = this.expression.good
        this.expression_very_good = this.expression['very-good']
        this.expression_avg = this.expression.avg
        this.expression_poor = this.expression.poor
        this.expression_very_poor = this.expression['very-poor']
      }
    },
    methods: {
      ...mapActions({
        pushExpression: 'expression/fetchExpression'
      }),
      async onExpresion(id) {
        let postdata = {
          response_status: id,
          post: this.$store.state.artikel.detail.id,
        }
        let response = await this.pushExpression(postdata);
        this.onShowNotifExpression()
        this.$refs['modalNotice'].hide()
      },
      onShowNitice(expression, val) {
        this.val = val
        this.expression = expression
        this.$refs['modalNotice'].show()
      },
      hideModal() {
        this.$refs['modalNotice'].hide()
      }
    }
  }
</script>

<style>
</style>