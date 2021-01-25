<template>
  <div>
    <a @click="scrollTop" v-show="scrollToTop" class="scroll-top">
      <b-icon-chevron-double-up></b-icon-chevron-double-up>
      <p class="mb-0">Back To <br>Top</p>
    </a>    
  </div>
</template>

<script>
  export default {
    components : {

    },
    data() {
      return {
        scrollToTop: false,
      }
    },
    computed: {
      
    },
    mounted() {
      window.addEventListener('scroll', this.scrollListener)
    },
    methods: {
      scrollTop() {
        this.intervalId = setInterval(() => {
          if (window.pageYOffset === 0) {
            clearInterval(this.intervalId)
          }
          window.scroll(0, window.pageYOffset - 50)
        }, 20)
      },
      scrollListener() {
        this.scrollToTop = window.scrollY > 200
      }
    },
  }
</script>

<style lang="scss">

</style>