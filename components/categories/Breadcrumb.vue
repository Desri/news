<template>
  <div>
    <b-row class="mb-4">
      <b-col cols="12" sm="8" md="8" lg="8">
        <b-breadcrumb>
          <b-breadcrumb-item href="/">
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item active>{{dataTitle}}</b-breadcrumb-item>
        </b-breadcrumb>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    props: [
      'dataTitle',
    ],
    components : {
      
    },
    data () {
      return {
        
      }
    },
    computed: {
      
    },
    async mounted() {
      
    },
    methods: {
      
    }
  }
</script>

<style>

</style>