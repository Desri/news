<template>
  <div>
    <b-container>
      <b-row>
        <b-col lg="12" class="py-5">
          <div class="text-center not-found" v-if="error.statusCode == 404">
            <h2>Maaf, halaman tidak ditemukan.</h2>
            <p>Periksa kembali link yang ingin kamu tuju atau kembali ke halaman depan.</p>
            <div class="py-5">
              <b-icon-box></b-icon-box>
            </div>
            <nuxt-link to="/">
              Kembali ke halaman depan
            </nuxt-link>
          </div>
          <div class="text-center not-found not-auth" v-if="error.statusCode == 401">
            <h2>{{error.status}}</h2>
            <p>No authorization found.</p>
            <div class="py-2">
              <b-icon-key></b-icon-key>
            </div>
          </div>
          <div class="text-center not-found" v-if="error.statusCode == 500">
            <h2>Maaf, sedang terjadi kesalahan.</h2>
            <p>Mohon ulangi kembali</p>
            <div class="py-5">
              <b-icon-box></b-icon-box>
            </div>
            <nuxt-link to="/">
              Kembali ke halaman depan
            </nuxt-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    components : {
    
    },
    data () {
      return {
        
      }
    },
    mounted() {
      
    },
    methods: {

    },
  }
</script>

<style>

</style>
