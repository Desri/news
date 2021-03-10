<template>
  <section id="main">
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="8">
          <AdsCenter class="mb-4" />
          <div class="new-article">
            <div class="heading-article mb-0">
              <div class="heading-left float-left">
                <span class="baging"></span>
                <h3>Terbaru</h3>
              </div>
              <!-- <div class="heading-right float-right">
                <span></span>
                <p>
                  <a @click="parseJwt()">Lihat lainnya<b-icon-chevron-right></b-icon-chevron-right></a>
                </p>
              </div> -->
            </div>
            <div class="list-article">
              <ul class="list-unstyled">
                <li class="media py-3" v-for="data in fetchedArtikels" :key="data.id">
                  <a :href="`/read/${data.slug}`">
                    <div class="box-label">
                      <span class="label-categories">
                        {{data._embedded["wp:term"][0][0].name}}
                      </span>
                    </div>
                    <div class="box-image-post">
                      <div class="box-no-image mr-4" v-if="!data._embedded[`wp:featuredmedia`]">
                        <div class="bg-no-image" :style="{'background':'url(' + noImage + ')','background-size': 'cover','background-repeat': 'no-repeat','background-position': 'center center'}"></div>
                      </div>
                      <div v-else class="mr-4">
                        <img :src="data._embedded[`wp:featuredmedia`][0].source_url" class="mr-4" :alt="data.title.rendered" />
                      </div>
                    </div>
                  </a>
                  <div class="media-body">
                    <a :href="`/read/${data.slug}`">
                      <h5 class="mt-0">{{stripHtml(data.title.rendered)}}</h5>
                    </a>
                    <p class="d-none d-sm-block">{{stripHtml(data.excerpt.rendered)}}</p>
                    <div class="box-user">
                      <div class="box-avatar-creator">
                        <nuxt-link to="/#">
                          <img :src="data._embedded.author[0].avatar_urls[48]" alt="Avatar" /><span>{{data._embedded.author[0].name}}</span>
                        </nuxt-link>
                      </div>
                      <div class="box-post-date">
                        <span><b-icon-circle-fill></b-icon-circle-fill> {{formatDateList(data.date)}}</span>
                      </div>
                      <!-- 
                      <div class="box-sperator">|</div>
                      <div class="box-comments">
                        <div class="comment-article">
                          <nuxt-link to="/#">
                            <i class="fa fa-comment-o" aria-hidden="true"></i> 4 Comments
                          </nuxt-link>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </li>
                <infinite-loading v-if="fetchedArtikels.length" spinner="waveDots" @infinite="infiniteScroll">
                  <span slot="no-more"></span>
                </infinite-loading>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="4">
          <sidebar-terpopuler></sidebar-terpopuler>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import axios from 'axios';
  import AdsCenter from '~/components/ads/AdsCenter';
  import SidebarTerpopuler from '~/components/sidebar/SidebarTerpopuler';
  export default {
    components : {
      axios,
      AdsCenter,
      SidebarTerpopuler
    },
    data () {
      return {
        noImage: require(`~/assets/img/no_image.png`),
        page: 1
      }
    },

    computed: {
      ...mapGetters({
        fetchedArtikels: 'artikel/artikels'
      }),
      url() {
        return `/wp-json/wp/v2/posts?per_page=10&page=${this.page}&_embed`;
      }
    },
    created() {
      this.fetchData();
    },
    async mounted() {
      if (localStorage.getItem("guest") !== null) {
        //await this.$store.dispatch('artikel/fetchArtikels');
      }
    },
    methods: {
      parseJwt () {
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd29yZHByZXNzLWRldmVsb3BtZW50LmluZG9jaGF0LmNvLmlkIiwiaWF0IjoxNjE0MDQ4MzUzLCJuYmYiOjE2MTQwNDgzNTMsImV4cCI6MTYxNDY1MzE1MywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMiJ9fX0.xOzHdocLKDhUf98fKJRYWSakqvq3ogT_2V-dmPIjAQ8'
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        let exp = JSON.parse(jsonPayload).exp * 1000;
        if (new Date(exp) <= new Date()) {
          console.log('true')
        }else{
          console.log('false')
        }
      },
      ...mapActions({
        fetchArtikels: 'artikel/fetchArtikels'
      }),
      // Infinite loading
      async fetchData() {
        let params = {
          'page' : this.page
        }
        let response = await this.fetchArtikels(params)
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
                response.data.forEach(item => this.fetchedArtikels.push(item));
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

<style lang="scss">
  
</style>