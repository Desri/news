<template>
  <section id="main">
    <b-container>
      <!-- <b-row class="mb-4">
        <b-col cols="12" sm="8" md="8" lg="8">
          <b-breadcrumb v-if="fetchedCategory[0]">
            <b-breadcrumb-item href="/">
              Home
            </b-breadcrumb-item>
            <b-breadcrumb-item active>{{titlePage}}</b-breadcrumb-item>
          </b-breadcrumb>
        </b-col>
      </b-row> -->
      <div class="recomendation mb-4" v-if="fetchedReccomend.length != 0">
        <reccomended :listCategories="fetchedReccomend"></reccomended>
      </div>
      <b-row>
        <b-col cols="12" sm="12" md="8" lg="8">
          <div class="new-article">
            <div class="heading-article">
              <div class="heading-left float-left">
                <span class="baging"></span>
                <!-- <h3>Terbaru di {{titlePage}}</h3> -->
                <h3>Terbaru</h3>
              </div>
            </div>
            <div class="list-article">
              <ul class="list-unstyled">

                <li class="media py-3" v-for="(data, index) in dataCategory" :key="index">
                  <a :href="`/read/${data.post_slug}`">
                    <div class="box-label">
                      <span class="label-categories" v-if="data.category">
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
                        <nuxt-link to="/#" v-if="data.post_author">
                          <img :src="data.post_author.avatar" alt="Avatar" /><span>{{data.post_author.name}}</span>
                        </nuxt-link>
                      </div>
                      <div class="box-post-date">
                        <span><b-icon-circle-fill></b-icon-circle-fill> {{formatDateList(data.post_date)}}</span>
                      </div>
                    </div>
                  </div>
                </li>
                <infinite-loading v-if="dataCategory.length" spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
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
  import {mapActions,mapGetters} from 'vuex'
  import axios from 'axios';
  import Reccomended from '~/components/categories/Reccomended';
  import SidebarTerpopuler from '~/components/sidebar/SidebarTerpopuler';
  export default {
    components : {
      
    },
    data () {
      return {
        titlePage: '',
        dataCategory: [],
        noImage: require(`~/assets/img/no_image.png`),
        page: 1
      }
    },
    computed: {
      ...mapGetters({
        fetchedCategory: 'artikel/category',
        fetchedReccomend: 'artikel/reccomend'
      }),

      url() {
        return `/wp-json/indonews/v1/posts-category/${this.$route.params.slug}/${this.page}`;
      }

    },

    created() {
      this.fetchData();
    },

    async mounted() {
      if (localStorage.getItem("guest") !== null) {
        let slug = this.$route.params.slug
        await this.$store.dispatch('artikel/fetchReccomend', slug)
      }
    },

    methods: {
      ...mapActions({
        fetchCategories: 'artikel/fetchCategory'
      }),

      async fetchData() {
        let params = {
          'slug' : this.$route.params.slug,
          'page' : this.page
        }
        var $self = this;
        $.ajax({
          type: "GET",
          url: `/wp-json/indonews/v1/posts-category/${params.slug}/1`,
          beforeSend: function(xhr){
            xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem("guest")}`);
          },
          success: function(response){
            $self.dataCategory = response[0]
          }
        });
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
                response.data[0].forEach(item => this.dataCategory.push(item));
                $state.loaded();
              } else {
                $state.complete();
              }
            })
            .catch(err => {
              console.log(err);
            });
        }, 500);
      },

    }
  }
</script>

<style>

</style>