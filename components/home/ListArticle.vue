<template>
  <section id="main">
    <b-container>
      <b-row>
        <b-col cols="12" sm="8" md="8" lg="8">
          <div class="new-article">
            <div class="heading-article mb-0">
              <div class="heading-left float-left">
                <span class="baging"></span>
                <h3>Terbaru</h3>
              </div>
              <div class="heading-right float-right">
                <span></span>
                <p>
                  <a @click="parseJwt()">Lihat lainnya<b-icon-chevron-right></b-icon-chevron-right></a>
                </p>
              </div>
            </div>
            <div class="list-article">
              <ul class="list-unstyled">
                <li class="media py-3" v-for="data in fetchedArtikels" :key="data.id">
                  <nuxt-link :to="`/read/${data.slug}`">
                    <div class="box-label">
                      <span class="label-categories">
                        {{data._embedded["wp:term"][0][0].name}}
                      </span>
                    </div>
                    <img v-if="!data._embedded[`wp:featuredmedia`]" class="mr-4" src="@/assets/img/no_image.png"/>
                    <img v-else :src="data._embedded[`wp:featuredmedia`][0].source_url" class="mr-4" :alt="data.title.rendered" />
                  </nuxt-link>
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
                      </div><!-- 
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
        fetchedArtikels: 'artikel/artikels'
      }),
    },
    async mounted() {
      if (localStorage.getItem("guest") !== null) {
        await this.$store.dispatch('artikel/fetchArtikels');
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

    }
  }
</script>

<style lang="scss">
  
</style>