<template>
  <div class="box-related mb-5 mt-4">
    <div class="related">
      <div class="heading-article">
        <div class="heading-left float-left">
          <span class="baging"></span>
          <h3>Topik Terkait</h3>
        </div>
      </div>
      <ul class="list-unstyled">
        <b-media tag="li" class="my-4" v-for="data in listTopikTerkait" :key="data.id">
          <template #aside>
            <a :href="`/read/${data.post_slug}`">
              <img v-if="data.featured_image == null || data.featured_image == ''" class="img-fluid" src="@/assets/img/no_image.png"/>
              <img v-else :src="data.featured_image" class="img-fluid" :alt="data.post_title" />
            </a>
          </template>
          <a :href="`/read/${data.post_slug}`">
            <h5 class="mt-0 mb-1">{{data.post_title}}</h5>
          </a>
          <p class="mb-0">{{data.post_excerpt}}</p>
        </b-media>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'listTopikTerkait',
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
      
    },
  }
</script>

<style lang="scss">
  
</style>
