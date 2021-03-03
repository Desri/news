<template>
  <div>
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="box-ads-bottom" v-if="showAds">
            <div class="box-close" @click="hideAds">
              <div class="btn-close">
                <p class="mb-0">Close<b-icon-x></b-icon-x></p>
              </div>
            </div>
            <img src="@/assets/img/ads_bottom.jpg" alt="Ads" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    components : {

    },
    data() {
      return {
        scrollToTop: false,
        showAds: true,
      }
    },
    computed: {
      
    },
    mounted() {
      
    },
    methods: {
      hideAds() {
        this.showAds = false
      }
    },
  }
</script>

<style lang="scss">
  
</style>