<template>
  <div>
    <b-container>
      <b-row>
        <b-col lg="12" class="py-5">
          <div class="text-center not-found">
            <h2>Maaf, halaman tidak ditemukan.</h2>
            <p>Periksa kembali link yang ingin kamu tuju atau kembali ke halaman depan.</p>
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
