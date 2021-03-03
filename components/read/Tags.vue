<template>
  <div>
    <div class="box-tags mt-4">
      <div class="label-tags">
        Tag :
      </div>
      <div class="list-tags">
        <ul>
          <li v-for="data in listTags">
            <nuxt-link to="#">
              {{data.name}}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'listTags',
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