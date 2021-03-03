<template>
  <div>
    <home-carousel></home-carousel>
    <list-article></list-article>
  </div>
</template>


<script>
  import HomeCarousel from '~/components/home/HomeCarousel';
  import ListArticle from '~/components/home/ListArticle';
  export default {
    components : {
      HomeCarousel,
      ListArticle
    },

    head() {
      return {
        titleTemplate: 'The Largest Application Chatting in Indonesia | %s',
        meta: [
          { property : 'og:type', content: `Article` },
          { property : "og:image", content: process.env.BASE_URL+'banner-thumb.png' },
          { property : "og:image:width", content : "300" },
          { property : "og:image:height", content : "300" },
        ],
      }
    },

    data () {
      return {
        
      }
    },
    computed: {
      
    },
    mounted() {
      
    }
  }
</script>

<style>

</style>
