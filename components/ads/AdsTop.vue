<template>
    <div>
        <img :src="this.url" class="img-fluid" alt="ads-top">
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
            this.url = this.fetchedAds.top.image_url;
        }
    }
}
</script>