<template>
  <div>
    <div class="list-expresion my-4">
      <ul>
        <li>
          <a href="javascript:void(0)" @click="onShowNitice('suka', 'srv_good')">
            <img src="@/assets/img/emoticon/suka.svg" class="img-fluid">
            <p class="percent mb-0">{{parseFloat(listExpressions.good).toFixed(1)}}%</p>
            <p class="mb-0">Suka</p>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="onShowNitice('lucu', 'srv_v_good')">
            <img src="@/assets/img/emoticon/lucu.svg" class="img-fluid">
            <p class="percent mb-0">{{parseFloat(listExpressions['very-good']).toFixed(1)}}%</p>
            <p class="mb-0">Lucu</p>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="onShowNitice('kaget', 'srv_avg')">
            <img src="@/assets/img/emoticon/kaget.svg" class="img-fluid">
            <p class="percent mb-0">{{parseFloat(listExpressions.avg).toFixed(1)}}%</p>
            <p class="mb-0">Kaget</p>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="onShowNitice('sedih', 'srv_poor')">
            <img src="@/assets/img/emoticon/sedih.svg" class="img-fluid">
            <p class="percent mb-0">{{parseFloat(listExpressions.poor).toFixed(1)}}%</p>
            <p class="mb-0">Sedih</p>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="onShowNitice('marah', 'srv_v_poor')">
            <img src="@/assets/img/emoticon/marah.svg" class="img-fluid">
            <p class="percent mb-0">{{parseFloat(listExpressions['very-poor']).toFixed(1)}}%</p>
            <p class="mb-0">Marah</p>
          </a>
        </li>
      </ul>
    </div>

    <b-modal ref="modalNotice" id="modalNotice" centered hide-header hide-footer>
      <div class="text-expression text-center py-4">
        <p class="mb-0">Apakah Anda yakin {{expression}} dengan artikel ini?</p>
        <div class="box-btns mt-4">
          <button class="yes" @click="onExpresion(val)">
            YA
          </button>
          <button class="no" @click="hideModal">
            TIDAK
          </button>
        </div>
      </div>
    </b-modal>

  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: [
      'listExpressions',
    ],
    components : {
      
    },
    data () {
      return {
        expression: '',
        val: ''
      }
    },
    computed: {
      
    },
    async mounted() {
      
    },
    methods: {
      ...mapActions({
        pushExpression: 'expression/fetchExpression'
      }),
      async onExpresion(id) {
        let postdata = {
          response_status: id,
          post: this.$store.state.artikel.detail.id,
        }
        let response = await this.pushExpression(postdata);
        this.onShowNotifExpression()
        this.$refs['modalNotice'].hide()
      },
      onShowNitice(expression, val) {
        this.val = val
        this.expression = expression
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