<template>
  <div>
    <b-navbar toggleable="lg" id="navbarPrimary">
      <b-container>
        <div class="navbar-mobile" @click="onShowMenu">
          <b-icon-x v-if="expanded"></b-icon-x>
          <b-icon-list v-if="notExpanded"></b-icon-list>
        </div>
        <b-navbar-brand href="/">
          <img :src="$store.state.identity.identity.logo"/>
        </b-navbar-brand>
        <b-collapse is-nav>
          <b-navbar-nav class="ml-autos ml-3">
            <div v-for="data in menuCategory" :key="data.id">
              <li class="nav-item">
                <a :href="`/categories/${data.slug}`" class="nav-link">
                  {{data.title}}
                </a>
              </li>
            </div>
            <!-- <div v-for="data in fetchedMenus" :key="data.id">
              <li class="nav-item">
                <nuxt-link v-if="data.object_type != 'custom' && data.object_type != 'category'" :to="`/${data.object}/${data.object_type}`" class="nav-link">
                  {{data.title}}
                </nuxt-link>
              </li>
            </div> -->
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-b-modal.form-login>Login</b-nav-item>
            <!-- <b-nav-item>|</b-nav-item>
            <b-nav-item v-b-modal.form-register>Register</b-nav-item> -->
          </b-navbar-nav>
          <login-form></login-form>
          <register-form></register-form>
        </b-collapse>
      </b-container>
    </b-navbar>
    <div class="boxMenuMobile pb-3" v-show="menuMobile">
      <b-container>
        <b-row class="mb-4">
          <b-col cols="12" class="p-0">
            <div class="listMenu">
              <div class="box-menu-top">
                <div class="boxs" style="width: 100%;">
                  <a href="javascript:void(0)" @click="onShowMenu" v-b-modal.form-login>Login</a>
                </div>
                <!-- <div class="boxs">
                  <a href="javascript:void(0)" @click="onShowMenu" v-b-modal.form-register>Register</a>
                </div> -->
              </div>
              <ul>
                <div v-for="data in menuCategory" :key="data.id" class="menu-mobile">
                  <li>
                    <a :href="`/categories/${data.slug}`">
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
    <top-topic></top-topic>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import TopTopic from '~/components/header/TopTopic';
  import LoginForm from '~/components/form/LoginForm';
  import RegisterForm from '~/components/form/RegisterForm';
  export default {
    components : {
      TopTopic
    },
    data () {
      return {
        menuMobile : false,
        expanded: false,
        notExpanded: true,
        menuCategory: [],
      }
    },
    computed: {
      ...mapGetters({
        fetchedMenus: 'menu/menus',
        fetchedTags: 'tags/tags'
      }),
    },
    async mounted() {
      if (localStorage.getItem("guest") !== null) {
        await this.$store.dispatch('menu/fetchMenus');
        await this.$store.dispatch('tags/fetchTags');
        let filterCategory = this.fetchedMenus.filter(dataarray => {
          return dataarray.object_type == "category";
        });
        this.menuCategory = filterCategory
      }
    },
    methods: {
      onShowMenu() {
        this.menuMobile = !this.menuMobile;
        let el1 = document.getElementsByTagName("BODY")[0];
        if (this.menuMobile == true) {
          el1.classList.add("activeMenu");
          this.expanded = true
          this.notExpanded = false
        }else{
          el1.classList.remove("activeMenu");
          this.expanded = false
          this.notExpanded = true
        }
      },
    },
  }
</script>

<style lang="scss">

</style>
