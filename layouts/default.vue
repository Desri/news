<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
  import Header from '~/components/header/Header';
  import Footer from '~/components/footer';
  import ScrollTop from '~/components/scroll-to-top';
  export default {
    components : {
      Header,
      Footer,
      ScrollTop
    },
    data () {
      return {
        form: {
          username: 'deryindochat',
          password: 'Deryindochat1602!!',
        },
      }
    },
    computed: {
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
      if (localStorage.getItem("auth._token.local") === null || localStorage.getItem("auth._token.local") === false) {
        this.onSubmit()
      }
    },
    methods: {
      onSubmit() {
        this.$auth.loginWith('local', {
          data: this.form
        })
      },
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