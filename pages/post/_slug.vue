<template>
  <section id="main">
    <b-container>
      <!-- <div class="recomendation mt-4 mb-5">
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
      </div> -->
      <b-row>
        <b-col cols="12" sm="8" md="8" lg="8">
          <div class="box-page">
            <h2 class="text-muted text-center" style="font-size: 4rem;padding-top: 10rem;">Box Post</h2>
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
      await this.$store.dispatch('artikel/fetchCategory', slug)
    },
    methods: {
      
    }
  }
</script>

<style>

</style>