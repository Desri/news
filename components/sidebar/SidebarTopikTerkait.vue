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
        <b-media tag="li">
          <template #aside>
            <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
          </template>
          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.</p>
        </b-media>
        <b-media tag="li" class="my-4">
          <template #aside>
           <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
          </template>
          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus.</p>
        </b-media>
        <b-media tag="li">
          <template #aside>
            <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
          </template>
          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">Cras sit amet nibh libero, in gravida nulla nulla vel.</p>
        </b-media>
      </ul>
    </div>
  </div>
</template>

<script>
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
