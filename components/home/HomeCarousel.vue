<template>
  <section id="slide-top">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-8">
          <div class="box-slide">
            <no-ssr>
              <b-carousel
                :interval="6000"
                background="#ababab"
                style="text-shadow: 1px 1px 2px #333;"
              >
                <div class="box-img" v-for="data in fetchHeadline" :key="data.id">
                  <a :href="`/read/${data.slug}`">
                    <b-carousel-slide :img-src="data.featured_image[0]">
                      <div class="box-caption">
                        <h2>{{data.title}}</h2>
                        <!-- <div class="caption-info">
                          <div class="caption-date">
                            <i class="fa fa-calendar-o" aria-hidden="true"></i> December 17, 2020
                          </div>
                          <div class="caption-seperator">|</div>
                          <div class="caption-comment">
                            <i class="fa fa-comment-o" aria-hidden="true"></i> 4 Comments
                          </div>
                        </div> -->
                      </div>
                    </b-carousel-slide>
                  </a>
                </div>
              </b-carousel>
            </no-ssr>
            <div class="d-none d-sm-block mt-3 list-headline">
              <div class="row">
                <div class="col-sm-4 col-lg-4" v-for="data in fetchSubHeadline" :key="data.id">
                  <div class="box-headline">
                    <a :href="`/read/${data.slug}`">
                      <div class="img-headline">
                        <span>{{data.category[0].cat_name}}</span>
                        <img v-if="!data.featured_image[0]" src="@/assets/img/no_image.png" alt="No Image" />
                        <img v-else :src="data.featured_image[0]" :alt="data.title" />
                      </div>
                      <div class="content-headline">
                        <p>{{stripHtml(data.teaser)}}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-none d-sm-none d-lg-block col-sm-4 col-lg-4">
          <trending-topic></trending-topic>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import TrendingTopic from '~/components/home/TrendingTopic';
  export default {
    components : {

    },
    computed: {
      ...mapGetters({
        fetchHeadline: 'artikel/headline',
        fetchSubHeadline: 'artikel/subHeadline',
      }),
    },
    async mounted() {
      if (localStorage.getItem("guest") !== null) {
        await this.$store.dispatch('artikel/fetchHeadline');
        await this.$store.dispatch('artikel/fetchSubHeadline');
      }
    },
    methods: {
      
    },
  }
</script>

<style lang="scss">
  
</style>
