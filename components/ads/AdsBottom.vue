<template>
    <div>
        <img :src="this.url" class="img-fluid" alt="ads-bottom">
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
            console.log(this.fetchedAds.bottom)
            this.url=this.fetchedAds.bottom.image_url;
        }
    }

}
</script>