<template>
  <b-modal id="form-login" centered hide-header hide-footer>
    <img class="brand-text" src="@/assets/img/logo_tulisan.svg"/>
    <!-- <b-form @submit="onSubmit"> -->
    <b-form>
      <b-form-group>
        <b-form-input
          v-model="form.username"
          type="text"
          placeholder="Enter Indochat number"
          required
        ></b-form-input>
      </b-form-group>
      <div @click="onSubmit" class="btn btn-block primary-button mt-4">LOG IN</div>
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
