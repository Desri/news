<template>
    <div>
        <img :src="this.url" class="img-fluid" alt="ads-left">
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
export default {
    components: {

    },
    data() {
        return {
            url: ''
        }
    },

    computed: {
        ...mapGetters({
            fetchedAds: 'ads/showAds'
        }),
    },

    async mounted() {
        if(localStorage.getItem("guest") !== null) {
            await this.$store.dispatch('ads/fetchAds');
            console.log(this.fetchedAds.left)
            this.url=this.fetchedAds.left.image_url;
        }
    }
}
</script>

<style lang="scss">

</style>