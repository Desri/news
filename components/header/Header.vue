<template>
  <header>
    <div class="navbarTop navbar-inverse navbar-static-top">
      <b-container>
        <b-row>
          <b-col lg="12">
            <div class="topContact float-left">
              <ul>
                <li>
                  <nuxt-link to="/#"><b-icon-telephone></b-icon-telephone> 0821-77877878</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/#"><b-icon-envelope></b-icon-envelope> test@email.com</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="top-date float-right">
              <p class="mb-0 text-white">Jumat, 8 Januari 2021</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <header-menu></header-menu>
    <top-topic></top-topic>
  </header>
</template>

<script>
  import HeaderMenu from '~/components/header/HeaderMenu';
  import TopTopic from '~/components/header/TopTopic';
  export default {
    components : {
      HeaderMenu,
      TopTopic
    },
    data () {
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
