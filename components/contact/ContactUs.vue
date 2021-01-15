<template>
  <div>
    <div class="contact py-4">
      <b-container>
        <div class="heading-contact">
          <h3>Contact us</h3>
          <p>Please fill out our contact form.</p>
        </div>
        <b-row>
          <b-col cols="12" sm="12" md="8" lg="8">
            <contact-form></contact-form>
          </b-col>
          <b-col cols="12" sm="12" md="4" lg="4">
            <div class="box-info">
              <div class="card">
                <div class="card-body">
                  <h3>JAKARTA</h3>
                  <p>Wisma Antara 15 Floor, No. 1500</p>
                  <p class="mb-2">Jl. Medan Merdeka Selatan Jakarta 10110 Indonesia</p>
                  <p><b-icon-telephone></b-icon-telephone>&nbsp; 0821-77877878</p>
                  <p><b-icon-printer></b-icon-printer>&nbsp; hello@indochat.co.id</p>
                  <p><b-icon-envelope></b-icon-envelope>&nbsp; <a href="mailto:hello@indochat.co.id">hello@indochat.co.id</a></p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  import ContactForm from '@/components/form/ContactForm'
  export default {
    components : {
      
    },
    data () {
      return {
        
      }
    },
    computed: {
      
    },
    mounted() {
      
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">

</style>
