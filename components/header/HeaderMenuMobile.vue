<template>
  <div>
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12">
          <div class="listMenu">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <div v-for="data in fetchedMenus" :key="data.id" class="menu-mobile">
                <li>
                  <a v-if="data.type != 'custom'" :href="`/${data.object}/${data.object_id}`" :data-label="`${data.title}`">
                    {{data.title}}
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import LoginForm from '~/components/form/LoginForm';
  export default {
    components : {
      
    },
    data () {
      return {
        menuMobile : false,
      }
    },
    computed: {
      ...mapGetters({
        fetchedMenus: 'menu/menus'
      }),
    },
    async mounted() {
      await this.$store.dispatch('menu/fetchMenus');
    },
    methods: {
      
    },
  }
</script>

<style lang="scss">

</style>
