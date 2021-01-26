<template>
  <b-navbar toggleable="lg" id="navbarPrimary">
    <b-container>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">
        <img src="@/assets/img/apple.svg"/>
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
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
</template>

<script>
  import LoginForm from '~/components/form/LoginForm';
  export default {
    components : {
      
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
