<template>
  <div>
    <div class="artikel-detail" >
      <h1 class="mt-4 mb-3">{{stripHtml(data.title.rendered)}}</h1>
      <div class="box-author">
        <b-media vertical-align="center">
          <template #aside>
            <img :src="data._embedded.author[0].avatar_urls[48]" alt="Avatar" />
          </template>
          <p class="lead">Author : <span>{{data._embedded.author[0].name}}</span></p>
          <span class="text-muted">{{formatDate(data.date)}}</span>
        </b-media>
      </div>
      <hr>
      <div class="content-detail">
        <div class="sticky-share">
          <sticky-share :data="data.title.rendered"></sticky-share>
        </div>
        <p v-html="data.content.rendered"></p>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
  import StickyShare from '~/components/share/StickyShare';
  export default {
    props: [
      'data',
    ],
    components : {
      StickyShare
    },
    data () {
      return {
        
      }
    },
    computed: {

    },
    async mounted() {
      
    },
    methods: {
      
    }
  }
</script>

<style>

</style>