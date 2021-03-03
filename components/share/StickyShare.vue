<template>
  <div>
    <div class="share">
      <p>Share</p>
      <ul>
        <li>
          <a :href="`https://www.facebook.com/sharer/sharer.php?t=${stripHtml(data)}&u=${this.fullPath}`" target="_blank">
            <div class="sosmed-share fb">
              <b-icon-facebook></b-icon-facebook>
            </div>
          </a>
        </li>
        <li>
          <a :href="`https://twitter.com/intent/tweet?text=${stripHtml(data)}&u=${this.fullPath}`" target="_blank">
            <div class="sosmed-share tw">
              <b-icon-twitter></b-icon-twitter>
            </div>
          </a>
        </li>
        <li>
          <a :href="`https://api.whatsapp.com/send?text=${this.fullPath}`" target="_blank">
            <div class="sosmed-share wa">
              <b-icon-chat-dots></b-icon-chat-dots>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="copyLink(urlPath)">
            <div class="sosmed-share copy">
              <b-icon-files></b-icon-files>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'data',
    ],
    components : {
      
    },
    data () {
      return {
        fullPath : '',
        urlPath: window.location.href,
      }
    },
    computed: {
    
    },
    async mounted() {
      this.fullPath = window.location.href
    },
    methods: {
      copyLink (value) {
        var tempInput = document.createElement("input");
        tempInput.value = value;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        this.$bvToast.toast('Link berhasil dicopy', {
          toaster: 'b-toaster-top-center',
          noCloseButton: true,
          solid: true,
          noAutoHide: false,
          variant: 'success',
        })
      },
    }
  }
</script>

<style lang="scss">

</style>
