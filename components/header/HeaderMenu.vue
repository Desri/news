<template>
  <div>
    <b-navbar toggleable="lg" id="navbarPrimary">
      <b-container>
        <!-- <b-navbar-toggle target="nav-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="x"></b-icon>
            <b-icon v-else icon="list"></b-icon>
          </template>
        </b-navbar-toggle> -->
        <div class="navbar-mobile" @click="onShowMenu">
          <b-icon-list></b-icon-list>
        </div>
        <b-navbar-brand href="/">
          <img src="@/assets/img/apple.svg"/>
        </b-navbar-brand>
        <b-collapse is-nav>
          <b-navbar-nav class="ml-autos ml-3">
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Produk</b-nav-item>
            <b-nav-item href="#">Ekonomi</b-nav-item>
            <b-nav-item href="#">Finansial</b-nav-item>
            <b-nav-item href="#">Lifestyle</b-nav-item>
            <b-nav-item href="#">Asuransi</b-nav-item>
            <b-nav-item href="#">Contact</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-b-modal.form-login>Login</b-nav-item>
            <b-nav-item>|</b-nav-item>
            <b-nav-item href="#">Register</b-nav-item>
          </b-navbar-nav>
          <login-form></login-form>
        </b-collapse>
      </b-container>
    </b-navbar>
    <div class="boxMenuMobile pt-3" v-show="menuMobile">
      <header-menu-mobile></header-menu-mobile>
    </div>
    <top-topic></top-topic>
  </div>
</template>

<script>
  import HeaderMenuMobile from '~/components/header/HeaderMenuMobile';
  import TopTopic from '~/components/header/TopTopic';
  import LoginForm from '~/components/form/LoginForm';
  export default {
    components : {
      TopTopic
    },
    data () {
      return {
        menuMobile : false,
      }
    },
    computed: {
      
    },
    mounted() {
      
    },
    methods: {
      onShowMenu() {
        this.menuMobile = !this.menuMobile;
        let el1 = document.getElementsByTagName("BODY")[0];
        if (this.menuMobile == true) {
          el1.classList.add("activeMenu");
        }else{
          el1.classList.remove("activeMenu");
        }
      },
    },
  }
</script>

<style lang="scss">

</style>
