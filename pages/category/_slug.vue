<template>
  <section id="main">
    <b-container>
      <b-row>
        <b-col cols="12" sm="8" md="8" lg="8">
          <b-breadcrumb v-if="fetchedCategory[`0`]">
            <b-breadcrumb-item href="/">
              Home
            </b-breadcrumb-item>
            <b-breadcrumb-item active>{{fetchedCategory[0]._embedded["wp:term"][0][0].name}}</b-breadcrumb-item>
          </b-breadcrumb>
        </b-col>
      </b-row>
      <div class="recomendation mt-4 mb-5">
        <div class="heading-article">
          <div class="heading-left float-left">
            <span class="baging"></span>
            <h3>Rekomendasi Kami</h3>
          </div>
        </div>
        <b-row>
          <b-col>
            <div class="box-recomendation">
              <img src="@/assets/img/recomendation1.jpg">
              <div class="short-desc">
                <p class="mb-0">Sepanjang 2020, Neraca Perdagangan Surplu ...</p>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="box-recomendation">
              <img src="@/assets/img/recomendation2.jpg">
              <div class="short-desc">
                <p class="mb-0">Program Kartu Prakerja Semester I/2021 Di ...</p>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="box-recomendation">
              <img src="@/assets/img/recomendation3.jpg">
              <div class="short-desc">
                <p class="mb-0">Taman Panel Surya Bakal Dibangun di Indon ...</p>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="box-recomendation">
              <img src="@/assets/img/recomendation4.jpg">
              <div class="short-desc">
                <p class="mb-0">Impor Babak Belur, Neraca Perdagangan 202 ...</p>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="box-recomendation">
              <img src="@/assets/img/recomendation5.jpg">
              <div class="short-desc">
                <p class="mb-0">Minta Akses Vaksinasi Mandiri, Pelaku Usa ...</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col cols="12" sm="8" md="8" lg="8">
          <div class="new-article">
            <div class="heading-article">
              <div class="heading-left float-left">
                <span class="baging"></span>
                <h3 v-if="fetchedCategory[`0`]">Terbaru di {{fetchedCategory[0]._embedded["wp:term"][0][0].name}}</h3>
              </div>
            </div>
            <div class="list-article">
              <ul class="list-unstyled">
                <li class="media py-3" v-for="data in fetchedCategory" :key="data.id">
                  <nuxt-link :to="`/read/${data.slug}`">
                    <div class="box-label">
                      <span class="label-categories">
                        {{data._embedded["wp:term"][0][0].name}}
                      </span>
                    </div>
                    <img :src="data._embedded[`wp:featuredmedia`][0].source_url" class="mr-4" :alt="data.title.rendered" />
                  </nuxt-link>
                  <div class="media-body">
                    <nuxt-link :to="`/read/${data.slug}`">
                      <h5 class="mt-0">{{data.title.rendered}}</h5>
                    </nuxt-link>
                    <p>{{stripHtml(data.excerpt.rendered)}}</p>
                    <div class="box-user">
                      <div class="box-avatar-creator">
                        <nuxt-link to="/#">
                          <img :src="data._embedded.author[0].avatar_urls[48]" alt="Avatar" /><span>{{data._embedded.author[0].name}}</span>
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
          <sidebar-topik-terkait></sidebar-topik-terkait>
          <sidebar-terpopuler></sidebar-terpopuler>
        </b-col>
      </b-row>
    </b-container>
  </section>
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
        fetchedCategory: 'artikel/category'
      }),
    },
    async mounted() {
      let slug = this.$route.params.slug;
      await this.$store.dispatch('artikel/GET_CATEGORY', slug)
    },
    methods: {
      
    }
  }
</script>

<style>

</style>