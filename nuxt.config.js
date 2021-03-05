import webpack from 'webpack';
import './config/index.js';
require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:title', content: 'og:title', content:'channel-enews | The Largest Application Chatting in Indonesia' },
      { hid: 'description', name: 'description', content: 'The Largest Application Chatting in Indonesia' },
      { hid: 'og:description', name: 'og:description', content: 'The Largest Application Chatting in Indonesia' },
      { hid: 'keywords', name: 'keywords', content: 'Largest, Chatting, Application, Indonesia, Aplikasi Chatting Terbesar di Indonesia' },
      { hid: 'author', name: 'author', content: 'channel-enews' },
      { hid: 'og:image', name: 'og:image', content: process.env.BASE_URL+'favicon.svg' },
      { hid: 'og:url', name: 'og:url', content: process.env.BASE_URL }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
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
    { src: '@/plugins/vue-infinite-scroll.js', ssr: false},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

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
    '@nuxtjs/dotenv',
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    //baseURL: process.env.BASE_API_URL,
    proxy: true,
    proxyHeaders: false,
    credentials: false,
  },

  proxy: {
    '/api/': { target: process.env.BASE_API_URL, pathRewrite: {'^/api/' : ''}, changeOrigin: true },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
    ],
  }
}
