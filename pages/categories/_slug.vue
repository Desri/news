<template>
  <section id="main">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" sm="8" md="8" lg="8">
          <b-breadcrumb v-if="fetchedCategory[0]">
            <b-breadcrumb-item href="/">
              Home
            </b-breadcrumb-item>
            <b-breadcrumb-item active>{{titlePage}}</b-breadcrumb-item>
          </b-breadcrumb>
        </b-col>
      </b-row>
      <div class="recomendation mb-4" v-if="fetchedRecomend.length != 0">
        <div class="heading-article mb-3">
          <div class="heading-left float-left">
            <span class="baging"></span>
            <h3>Rekomendasi Kami</h3>
          </div>
        </div>
        <div class="section-recomendation">
          <b-row>
            <b-col cols="6" lg="" v-for="data in fetchedRecomend" :key="data.id">
              <div class="box-recomendation">
                <a :href="`/read/${data.post_slug}`">
                  <img v-if="data.featured_image == null || data.featured_image == ''" class="img-fluid" src="@/assets/img/no_image.png"/>
                  <img v-else :src="data.featured_image" class="img-fluid" :alt="data.post_title" />
                  <div class="short-desc">
                    <p class="mb-0">{{data.post_excerpt}}</p>
                  </div>
                </a>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <b-row>
        <b-col cols="12" sm="8" md="8" lg="8">
          <div class="new-article">
            <div class="heading-article">
              <div class="heading-left float-left">
                <span class="baging"></span>
                <h3>Terbaru di {{titlePage}}</h3>
              </div>
            </div>
            <div class="list-article">
              <ul class="list-unstyled">
                <li class="media py-3" v-for="data in fetchedCategory" :key="data.ID">
                  <a :href="`/read/${data.post_slug}`">
                    <div class="box-label">
                      <span class="label-categories" v-if="data.category">
                        {{data.category.name}}
                      </span>
                    </div>
                    <div>
                      <img v-if="data.featured_image == false" class="mr-4" src="@/assets/img/no_image.png"/>
                      <img v-else :src="data.featured_image" class="mr-4" :alt="data.post_title" />
                    </div>
                  </a>
                  <div class="media-body">
                    <a :href="`/read/${data.post_slug}`">
                      <h5 class="mt-0">{{data.post_title}}</h5>
                    </a>
                    <p>{{stripHtml(data.post_excerpt)}}</p>
                    <div class="box-user">
                      <div class="box-avatar-creator">
                        <nuxt-link to="/#" v-if="data.post_author">
                          <img :src="data.post_author.avatar" alt="Avatar" /><span>{{data.post_author.name}}</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
        titlePage: '',
      }
    },
    computed: {
      ...mapGetters({
        fetchedCategory: 'artikel/category',
        fetchedRecomend: 'artikel/recomend'
      }),
    },
    async mounted() {
      if (localStorage.getItem("guest") !== null) {
        let slug = this.$route.params.slug
        await this.$store.dispatch('artikel/fetchCategory', slug)
        this.titlePage = this.fetchedCategory[0].category.name
        await this.$store.dispatch('artikel/fetchRecomend', slug)
      }
    },
    methods: {

    }
  }
</script>

<style>

</style>