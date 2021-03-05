<template>
  <div>
    <div class="heading-article mb-3">
      <div class="heading-left float-left">
        <span class="baging"></span>
        <h3>Rekomendasi Kami</h3>
      </div>
    </div>
    <div class="section-recomendation">
      <b-row>
        <b-col cols="6" lg="" v-for="data in listCategories" :key="data.id">
          <div class="box-recomendation">
            <a :href="`/read/${data.post_slug}`">
              <img v-if="data.featured_image == null || data.featured_image == ''" class="img-fluid" src="@/assets/img/no_image.png"/>
              <img v-else :src="data.featured_image" class="img-fluid" :alt="data.post_title" />
              <div class="short-desc">
                <p class="mb-0">{{data.post_excerpt}}</p>
              </div>
            </a>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'listCategories',
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