<template>
  <div class="box-form">
    <b-form>
      <b-row>
        <b-col lg="12">
          <b-form-group label="Perihal:">
            <b-form-input type="text" v-model="form.subjek" required ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group label="Nama:">
            <b-form-input type="text" v-model="form.name" required ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group label="Email:">
            <b-form-input type="text" v-model="form.email" required ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="12">
          <b-form-group label="Deskripsi:">
            <b-form-textarea rows="7" ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button type="submit" class="primary-button w-25">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    components : {
      
    },
    data () {
      return {
        form: {
          subjek: '',
          name: '',
          email: '',
        },
      }
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
