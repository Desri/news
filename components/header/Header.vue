<template>
  <header>
    <div class="navbarTop navbar-inverse navbar-static-top">
      <b-container>
        <b-row>
          <b-col lg="12">
            <div class="topContact float-left">
              <ul>
                <li>
                  <b-icon-telephone></b-icon-telephone> {{$store.state.identity.identity.phone}}
                </li>
                <li>
                  <nuxt-link to="/#"><b-icon-envelope></b-icon-envelope> {{$store.state.identity.identity.email}}</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="top-date float-right">
              <p class="mb-0 text-white">{{ timestamp }} </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <header-menu></header-menu>
  </header>
</template>

<script>
  import HeaderMenu from '~/components/header/HeaderMenu';
  export default {
    components : {
      HeaderMenu
    },
    data () {
      return {
        timestamp: ""
      }
    },
    computed: {
      
    },
    async mounted() {
      
    },
    created() {
      setInterval(this.getNow, 1000);
    },
    methods: {
      getNow: function() {
        let arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
        let arrhari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
        let date = new Date();
        let hari = date.getDay();
        let tanggal = date.getDate();
        let bulan = date.getMonth();
        let tahun = date.getFullYear();
        let datetimes = arrhari[hari]+", "+tanggal+" "+arrbulan[bulan]+" "+tahun;
        this.timestamp = datetimes;
      }
    },
  }
</script>

<style lang="scss">
  
</style>
