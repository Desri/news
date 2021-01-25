export default {
  target: 'server',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'indochat-news',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src:'//unpkg.com/vue@latest/dist/vue.min.js', ssr: false, defer: true},
      { src:'//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js', ssr: false, defer: true},
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/global',
    { src: '@/plugins/vue-slick-carousel.js'},
    { src: '@/plugins/axios'},
    { src: '@/plugins/BootstrapVue'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/jwt-auth/v1/token',
            method: 'post',
            propertyName: 'token'
          },
          user: {
            url: '', method: '', propertyName: ''
          },
        }
      }
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    //baseURL: 'https://news-rest.telunjukatas.tech/wp-json',
    proxy:true,
    proxyHeaders: false,
    credentials: false,
  },
  
  proxy: {
    '/api/': { target: 'https://news-rest.telunjukatas.tech/wp-json/', pathRewrite: {'^/api/': ''},changeOrigin: true }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
