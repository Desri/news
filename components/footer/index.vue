<template>
  <footer class="py-5 mt-5">
    <b-container>
      <b-row>
        <b-col cols="12" md="4" lg="4" class="text-center flex-wrap mb-4 mb-md-0">
          <div class="logo_footer mb-3">
            <img :src="$store.state.identity.identity.logo"/>
          </div>
          <p class="m-0 text-white copyright">＠2021 PT. Testing News All Rights Reserved</p>
          <div class="list_sosmed mt-3">
            <ul>
              <li v-if="$store.state.identity.identity.instagram != ''">
                <a :href="$store.state.identity.identity.instagram"><img src="@/assets/img/icon-sosmed/instagram.svg"/></a>
              </li>
              <li v-if="$store.state.identity.identity.facebook != ''">
                <a :href="$store.state.identity.identity.facebook"><img src="@/assets/img/icon-sosmed/facebook.svg"/></a>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col md="5" lg="5" class="d-none d-sm-block">
          <div class="menu_footer">
            <ul>
              <li class="mb-2">
                <nuxt-link to="/#">Rilis Pers</nuxt-link>
              </li>
              <li class="mb-2">
                <nuxt-link to="/#">Tentang Kami</nuxt-link>
              </li>
              <li class="mb-2">
                <nuxt-link to="/#">Jaringan</nuxt-link>
              </li>
              <li class="mb-2">
                <nuxt-link to="/#">Kebijakan Privasi</nuxt-link>
              </li>
              <li class="mb-2">
                <nuxt-link to="/#">Pedoman Media Siber</nuxt-link>
              </li>
              <li class="mb-2">
                <nuxt-link to="/#">Ketentuan Penggunaan</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="menu_footer">
            <ul>
              <li class="mb-2">
                <nuxt-link to="/contact">Hubungi Kami</nuxt-link>
              </li>
              <li class="mb-2">
                <nuxt-link to="/advertise">Info Iklan</nuxt-link>
              </li>
              <li class="mb-2">
                <nuxt-link to="/#">Dari Redaksi</nuxt-link>
              </li>
              <li class="mb-2">
                <nuxt-link to="/pedoman-media-siber">Pedoman Media Siber</nuxt-link>
              </li>
              <li class="mb-2">
                <nuxt-link to="/#">Ketentuan Penggunaan</nuxt-link>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col cols="12" md="3" lg="3">
          <div class="download_apps">
            <h3>Download</h3>
            <a href="#" class="pr-1 pr-md-2">
              <img src="@/assets/img/icon-apps/google_play.jpg"/>
            </a>
            <a href="#" class="pl-1 pl-md-2">
              <img src="@/assets/img/icon-apps/apps_store.jpg"/>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
  export default {
    components : {

    },
    data() {
      return {
        
      }
    },
    computed: {
      
    },
    mounted() {
      
    },
    methods: {
      
    },

  }
</script>

<style lang="scss">
  
</style>