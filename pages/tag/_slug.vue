<template>
  <section id="main">
    <b-container>
      <b-row>
        <b-col cols="12" sm="8" md="8" lg="8">
          <div class="new-article">
            <div class="list-article">
              <ul class="list-unstyled">
                <li class="media py-3" v-for="data in fetchedFilterTags" :key="data.ID">
                  <a :href="`/read/${data.post_slug}`">
                    <div class="box-label">
                      <span class="label-categories">
                        {{data.category.name}}
                      </span>
                    </div>
                    <div class="box-image-post">
                      <div class="box-no-image mr-4" v-if="data.featured_image == false">
                        <div class="bg-no-image" :style="{'background':'url(' + noImage + ')','background-size': 'cover','background-repeat': 'no-repeat','background-position': 'center center'}"></div>
                      </div>
                      <div v-else class="mr-4">
                        <img :src="data.featured_image" :alt="data.post_title" />
                      </div>
                    </div>
                  </a>
                  <div class="media-body">
                    <a :href="`/read/${data.post_slug}`">
                      <h5 class="mt-0">{{data.post_title}}</h5>
                    </a>
                    <p>{{stripHtml(data.post_excerpt)}}</p>
                    <div class="box-user">
                      <div class="box-avatar-creator">
                        <nuxt-link to="/#">
                          <img :src="data.post_author.avatar" alt="Avatar" /><span>{{data.post_author.name}}</span>
                        </nuxt-link>
                      </div>
                      <div class="box-post-date">
                        <span><b-icon-circle-fill></b-icon-circle-fill> {{formatDateList(data.post_date)}}</span>
                      </div>
                    </div>
                  </div>
                </li>
                <infinite-loading v-if="fetchedFilterTags.length" spinner="waveDots" @infinite="infiniteScroll">
                  <span slot="no-more"></span>
                  <span slot="no-results"></span>
                </infinite-loading>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="4" md="4" lg="4">
          <sidebar-terpopuler></sidebar-terpopuler>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import axios from 'axios';
  import SidebarTerpopuler from '~/components/sidebar/SidebarTerpopuler';
  export default {
    components : {
      
    },
    data () {
      return {
        page: 1,
        noImage: require(`~/assets/img/no_image.png`),
      }
    },
    computed: {
      ...mapGetters({
        fetchedFilterTags: 'tags/filterTags',
      }),
      url() {
        return `/wp-json/indonews/v1/posts-tag-slug/${this.$route.params.slug}/${this.page}`;
      }
    },
    created() {
      this.fetchData();
    },
    async mounted() {
      
    },
    methods: {
      ...mapActions({
        fetchTags: 'tags/fetchFilterTags'
      }),
      async fetchData() {
        let params = {
          'slug' : this.$route.params.slug,
          'page' : this.page
        }
        let response = await this.fetchTags(params)
      },
      infiniteScroll($state) {
        setTimeout(() => {
          this.page++;
          axios
            .get(this.url, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem("guest")}`
              },
            })
            .then(response => {
              if (response.data.length > 1) {
                response.data.forEach(item => this.fetchedFilterTags.push(item));
                $state.loaded();
              } else {
                $state.complete();
              }
            })
            .catch(err => {
              $state.complete();
            });
        }, 500);
      },


    }
  }
</script>

<style>

</style>