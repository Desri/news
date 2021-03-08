<template>
  <section id="main">
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="8" lg="8">
          <div class="new-article">
            <div class="list-article">
              <ul class="list-unstyled">
                <li class="media py-3" v-for="data in fetchedFilterTags" :key="data.id">
                  <a :href="`/read/${data.slug}`">
                    <div class="box-label">
                      <!-- <span class="label-categories">
                        {{fetchedJudulCategory.name}}
                      </span> -->
                    </div>
                    <img v-if="!data._embedded[`wp:featuredmedia`]" class="mr-4" src="@/assets/img/no_image.png"/>
                    <img v-else :src="data._embedded[`wp:featuredmedia`][0].source_url" class="mr-4" :alt="data.title.rendered" />
                  </a>
                  <div class="media-body">
                    <a :href="`/read/${data.slug}`">
                      <h5 class="mt-0">{{data.title.rendered}}</h5>
                    </a>
                    <p>{{stripHtml(data.excerpt.rendered)}}</p>
                    <div class="box-user">
                      <div class="box-avatar-creator">
                        <nuxt-link to="/#">
                          <img :src="data._embedded.author[0].avatar_urls[48]" alt="Avatar" /><span>{{data._embedded.author[0].name}}</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="4" lg="4">
          <sidebar-terpopuler></sidebar-terpopuler>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import SidebarTerpopuler from '~/components/sidebar/SidebarTerpopuler';
  export default {
    components : {
      
    },
    data () {
      return {
        
      }
    },
    computed: {
      ...mapGetters({
        fetchedFilterTags: 'tags/filterTags',
        fetchedJudulCategory: 'artikel/judulCategory'
      }),
    },
    async mounted() {
      let slug = this.$route.params.slug;
      // await this.$store.dispatch('artikel/fetchJudulCategory', slug)
      await this.$store.dispatch('tags/fetchFilterTags', slug)
    },
    methods: {
      
    }
  }
</script>

<style>

</style>