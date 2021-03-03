<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <ScrollTop />
    <AdsBottom />
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Header from '~/components/header/Header';
  import Footer from '~/components/footer';
  import ScrollTop from '~/components/scroll-to-top';
  import AdsBottom from '~/components/ads';
  export default {
    components : {
      Header,
      Footer,
      ScrollTop,
      AdsBottom
    },
    data () {
      return {
        form: {
          username: 'dery',
          password: 'NGebbEM9dEGx60DqBJagUjyc',
        },
        favicon: this.$store.state.identity
      }
    },
    head(){
      return {
        link: [{ 
          rel: 'icon', 
          type: 'image/x-icon', 
          href: this.favicon.identity.logoIcon
        }]
      }
    },
    
    computed: {
      ...mapGetters({
        fetchedIdentity: 'identity/identity'
      }),
      connectionStatus() {
        return this.$nuxt.isOffline
      },
    },
    watch: {
      connectionStatus(offline) {
        if (offline) {
          this.$bvToast.toast('Mohon cek koneksi internet Anda', {
            id: 'offline',
            toaster: 'b-toaster-top-center',
            noCloseButton: true,
            solid: true,
            noAutoHide: true,
            variant: 'danger',
          })
        } else {
          this.$bvToast.hide('offline')
        }
      },
    },
    async mounted() {
      if (localStorage.getItem("guest") === null || localStorage.getItem("guest") === false) {
        await this.$store.dispatch('get-token/fetchGuestToken', this.form)
      }else{
        await this.$store.dispatch('identity/fetchIdentity');
      }
    },
    methods: {
      // onSubmit() {
      //   this.$auth.loginWith('local', {
      //     data: this.form
      //   })
      // },
    },
  }
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>