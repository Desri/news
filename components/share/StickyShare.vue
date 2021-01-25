<template>
  <div>
    <div class="share">
      <p>Share</p>
      <ul>
        <li>
          <a :href="`https://www.facebook.com/sharer/sharer.php?t=${data}&u=${this.fullPath}`" target="_blank">
            <div class="sosmed-share fb">
              <b-icon-facebook></b-icon-facebook>
            </div>
          </a>
        </li>
        <li>
          <a :href="`https://twitter.com/intent/tweet?text=${data}&u=${this.fullPath}`" target="_blank">
            <div class="sosmed-share tw">
              <b-icon-twitter></b-icon-twitter>
            </div>
          </a>
        </li>
        <li>
          <a :href="`whatsapp://send?text=${data}%0A${this.fullPath}`" target="_blank">
            <div class="sosmed-share wa">
              <b-icon-chat-dots></b-icon-chat-dots>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    props: [
      'data',
    ],
    components : {
      
    },
    data () {
      return {
        fullPath : '',
      }
    },
    computed: {
    
    },
    async mounted() {
      this.fullPath = window.location.href
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">

</style>
