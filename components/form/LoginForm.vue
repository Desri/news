<template>
  <b-modal id="form-login" hide-header hide-footer>
    <p class="short-desc text-center">It takes less than a minute to start your reading journey.</p>
    <p class="login-with text-center">Log in with:</p>
    <div class="login-sosmed">
      <div class="btnFacebook">
        <img src="@/assets/img/icon-sosmed/facebook_round.png"/>
        <span>Facebook</span>
      </div>
      <div class="btnGoogle">
        <img src="@/assets/img/icon-sosmed/google_round.png"/>
        <span>Google</span>
      </div>
    </div>
    <div class="separator my-3 text-center"><span>Or</span></div>
    <!-- <b-form @submit="onSubmit"> -->
    <b-form>
      <b-form-group>
        <b-form-input
          v-model="form.username"
          type="email"
          placeholder="Username"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="form.password"
          placeholder="Password"
          :type="passwordVisible ? 'text' : 'password'"
          required
        ></b-form-input>
        <div @click='togglePasswordVisibility' :arial-label='passwordVisible ? "Hide password" : "Show password"'>
          <span v-if="passwordVisible"><b-icon-eye></b-icon-eye></span>
          <span v-else><b-icon-eye-slash></b-icon-eye-slash></span>
        </div>
      </b-form-group>
      <div @click="onSubmit" class="btn btn-block primary-button mt-4">Log In</div>
      <p class="text-center mt-2 mb-0">By signing up, you are agree with the <nuxt-link to="/#">Terms and Conditions</nuxt-link> applied.</p>
    </b-form>
  </b-modal>
</template>

<script>
  export default {
    components : {
      
    },
    data () {
      return {
        form: {
          username: '',
          password: '',
        },
        passwordVisible: false,
      }
    },
    computed: {
      
    },
    async mounted() {
      
    },
    methods: {
      togglePasswordVisibility () {
        this.passwordVisible = !this.passwordVisible
      },
      onSubmit() {
        
      },
    },
  }
</script>

<style lang="scss">

</style>
