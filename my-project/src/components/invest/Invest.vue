<template>
  <div>
    <div class="tit">{{invest.title}}</div>
    <hot-spot v-if="home.num" :num="home.num"></hot-spot>
    <div class="business">
      <div class="business-header">
        <span class="account">
          <img class="invest-icon" src="../../common/img/boc_menu_account.png">
          <div>{{invest.account}}</div>
        </span>
        <span class="transfer">
          <img class="invest-icon" src="../../common/img/boc_menu_transfer.png">
          <div>{{invest.transfer}}</div>
        </span>
        <span class="credit-card">
          <img class="invest-icon" src="../../common/img/boc_menu_credit_card.png">
          <div>{{invest.creditCard}}</div>
        </span>
        <span class="loan">
          <img class="invest-icon" src="../../common/img/boc_menu_loan.png">
          <div>{{invest.loan}}</div>
        </span>
      </div>
      <div class="business-bottom">
        <span class="remit">
          <img class="invest-icon" src="../../common/img/boc_img_sb_remit.png">
          <div>{{invest.remit}}</div>
        </span>
        <span class="licai">
          <img class="invest-icon" src="../../common/img/icon_invest_licai.png">
          <div>{{invest.liCai}}</div>
        </span>
        <span class="jijin">
          <img class="invest-icon" src="../../common/img/icon_invest_jijin.png">
          <div>{{invest.jiJin}}</div>
        </span>
        <span class="more">
          <img class="invest-icon" src="../../common/img/boc_cross_border_more.png">
          <div>{{invest.more}}</div>
        </span>
      </div>
    </div>
    <div class="rail"></div>
    <stock :invest="invest"/>
  </div>
</template>
<script>
  import HotSpot from './HotSpot'
  import Stock from './Stock'

  export default {
    data() {
      return {
        invest: {}
      }
    },
    props: {
      home: Object
    },
    components: {
      HotSpot,
      Stock
    },
    created() {
      this.$axios.get('/api/invest')
        .then((res) => {
          res = res.data
          if (res.errno === 0) {
            this.invest = res.data
            console.log(res)
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tit
    width 100%
    height 50px
    padding-left 145px
    padding-top 10px
    font-weight bold
    font-size 18px

  .business
    width 100%
    height 200px
    .business-header
      width 100%
      height 100px
      padding 15px 20px
      float left
      & > span
        width 25%
        height 100px
        float left
        text-align center
        font-size 14px
        & > .invest-icon
          width 40px
          height 40px
    .business-bottom
      width 100%
      height 100px
      padding 15px 20px
      float left
      & > span
        width 25%
        height 100px
        float left
        text-align center
        font-size 14px
        & > .invest-icon
          width 40px
          height 40px
  .rail
    width 100%
    height 8px
    background rgb(233, 234, 238)
</style>
