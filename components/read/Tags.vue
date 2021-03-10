<template>
  <div>
    <div class="box-tags mt-4">
      <div class="label-tags">
        Tag :
      </div>
      <div class="list-tags">
        <ul>
          <li v-for="data in listTags" :key="data.id">
            <nuxt-link :to="`/tag/${data.slug}`">
              {{data.name}}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
 import {mapGetters} from 'vuex'
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
      // ...mapGetters({
      //   fetchedTags: 'tags/tags'
      // })

    },
    // async mounted() {
    //   if (localStorage.getItem("guest") !== null) {
    //     await this.$store.dispatch('tags/fetchTags');
    //   }
      
    // },
    methods: {
      
    }
  }
</script>

<style>

</style>