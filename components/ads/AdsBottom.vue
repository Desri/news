<template>
    <div>
        <img :src="this.url" class="img-fluid">
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
            this.url = this.fetchedAds.bottom.image_url;
        }
    }
}
</script>