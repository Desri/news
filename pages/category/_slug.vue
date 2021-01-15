<template>
  <section id="main">
    <b-container>
      <b-row>
        <b-col cols="12" sm="8" md="8" lg="8">
          <b-breadcrumb>
            <b-breadcrumb-item href="/">
              Home
            </b-breadcrumb-item>
            <b-breadcrumb-item active>dery</b-breadcrumb-item>
          </b-breadcrumb>
        </b-col>
      </b-row>
      <div class="recomendation my-4">
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
            <div class="list-article">
              <ul class="list-unstyled">
                <li class="media py-3">
                  <nuxt-link to="/#">
                    <div class="box-label">
                        <span class="label-categories">
                          Sains
                        </span>
                    </div>
                    <img src="@/assets/img/recomendation4.jpg" class="mr-4">
                  </nuxt-link>
                  <div class="media-body">
                    <nuxt-link to="/#">
                      <h5 class="mt-0">Title</h5>
                    </nuxt-link>
                    <p>Content</p>
                    <div class="box-user">
                      <div class="box-avatar-creator">
                        <nuxt-link to="/#">
                          <img src="@/assets/img/avatar14.jpg" alt="Avatar"><span>Dery Indochat</span>
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
      console.log(this.fetchedCategory)
    },
    methods: {
      stripHtml: function(html){
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
      },
    }
  }
</script>

<style>

</style>
