<template>
  <div>
    <div class="comments">
      <div class="card my-4">
        <h5 class="card-header">Tinggalkan Komentar:</h5>
        <div class="card-body">
          <form>
            <div class="form-group mb-0">
              <textarea class="form-control" rows="4" placeholder="Komentar Anda..." maxlength="1000" v-model="content"></textarea>
              <span class="text-muted">{{1000 - content.length}} Karakter tersisa</span>
            </div>
            <button v-if="content.length > 10" type="button" class="btn btn-primary float-right primary-button" @click="onShowNotice">Submit</button>
          </form>
        </div>
      </div>
      <div class="list-comments">
        <div class="media mb-4" v-if="listComments.length > 0" v-for="data in listComments">
          <img class="d-flex mr-3 rounded-circle" :src="data.author_avatar_urls[48]" alt="Avatar" />
          <div class="media-body">
            <h5 class="mt-0">{{data.author_name}}</h5>
            <p v-html="data.content.rendered"></p>
            <div class="lapor text-right mt-3">
              <b-toast :id="`comments-${data.id}`" class="form-lapor" title="Silakan berikan laporan Anda terkait komentar ini :" static no-auto-hide>
                <b-form-group>
                  <b-form-radio v-model="selected" name="some-radios" value="1">Penyalahgunaan Akun</b-form-radio>
                  <b-form-radio v-model="selected" name="some-radios" value="2">Menghasut</b-form-radio>
                  <b-form-radio v-model="selected" name="some-radios" value="3">Ucapan penghinaan/kebencian</b-form-radio>
                  <b-form-radio v-model="selected" name="some-radios" value="4">Spam</b-form-radio>
                  <button type="submit" class="btn btn-primary float-left primary-button mt-2">Kirim</button>
                </b-form-group>
              </b-toast>
              <a href="javascript:void(0)" @click="$bvToast.show(`comments-${data.id}`)">Laporkan <b-icon-flag></b-icon-flag></a>
            </div>
          </div>
        </div>
        <div class="no-comments text-center" v-if="listComments.length == 0">
          <h5 class="mb-0">Belum ada komentar.</h5>
          <p class="mb-0">Jadilah yang pertama berkomentar di sini</p>
        </div>
      </div>
      <b-modal ref="modalNotice" id="modalNotice" centered hide-header hide-footer>
        <div class="text-expression text-center py-4">
          <p class="mb-0">Apakah Anda yakin dengan komentar ini?</p>
          <div class="box-btns mt-4">
            <button class="yes" @click="onSubmit">
              YA
            </button>
            <button class="no" @click="hideModal">
              TIDAK
            </button>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    props: [
      'listComments',
    ],
    components : {
      
    },
    data () {
      return {
        content: '',
        selected: '',
      }
    },
    computed: {
      
    },
    async mounted() {
      
    },
    methods: {
      ...mapActions({
        pushComment: 'comments/fetchSubmitComment'
      }),
      async onSubmit() {
        let postdata = {
          content: this.content,
          post: this.$store.state.artikel.detail.id,
          status: 'hold'
        }
        let response = await this.pushComment(postdata);
        this.content = ''
        this.onShowNotifComment()
        this.hideModal()
      },
      onShowNotice() {
        this.$refs['modalNotice'].show()
      },
      hideModal() {
        this.$refs['modalNotice'].hide()
      }
    }
  }
</script>

<style>

</style>