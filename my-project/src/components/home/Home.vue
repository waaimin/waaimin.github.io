<template>
  <div>
    <div class="header-home">
      <span class="sign"></span>
      <span class="title"></span>
      <span class="add"></span>
    </div>
    <hot-spot v-if="home.num" :num="home.num"></hot-spot>
    <div class="business">
      <div class="business-header">
        <span class="account">
          <img class="home-icon" src="../../common/img/boc_menu_account.png">
          <div>{{home.account}}</div>
        </span>
        <span class="transfer">
          <img class="home-icon" src="../../common/img/boc_menu_transfer.png">
          <div>{{home.transfer}}</div>
        </span>
        <span class="credit-card">
          <img class="home-icon" src="../../common/img/boc_menu_credit_card.png">
          <div>{{home.creditCard}}</div>
        </span>
        <span class="loan">
          <img class="home-icon" src="../../common/img/boc_menu_loan.png">
          <div>{{home.loan}}</div>
        </span>
      </div>
      <div class="business-bottom">
        <span class="remit">
          <img class="home-icon" src="../../common/img/boc_img_sb_remit.png">
          <div>{{home.remit}}</div>
        </span>
        <span class="licai">
          <img class="home-icon" src="../../common/img/icon_invest_licai.png">
          <div>{{home.liCai}}</div>
        </span>
        <span class="jijin">
          <img class="home-icon" src="../../common/img/icon_invest_jijin.png">
          <div>{{home.jiJin}}</div>
        </span>
        <span class="more">
          <img class="home-icon" src="../../common/img/boc_cross_border_more.png">
          <div>{{home.more}}</div>
        </span>
      </div>
    </div>
    <div class="rail"></div>
    <div class="daily">
      <span class="daily-content">
        <img src="../../common/img/smallservices_48.png">
        <span>{{home.finance}}</span>
      </span>
      <span class="daily-content">
        <img src="../../common/img/smallservices_54.png">
        <span>{{home.assets}}</span>
      </span>
      <span class="daily-content">
        <img src="../../common/img/smallservices_49.png">
        <span>{{home.mobile}}</span>
      </span>
    </div>
    <div class="rail"></div>
    <stock :home="home"/>
  </div>
</template>

<script>
  import Stock from './Stock'
  import HotSpot from './HotSpot'

  export default {
    data() {
      return {}
    },
    props: {
      home: Object
    },
    components: {
      Stock,
      HotSpot
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header-home
    display flex
    width 100%
    height 50px
    border-bottom 1px solid #000
    .sign
      flex 1
      margin-left 20px
      margin-top 7px
      background-image url("../../common/img/icon_login.png")
      background-size 24px
      background-repeat no-repeat
    .title
      flex 5
      margin-top 9px
      margin-left 45px
      background-image url("../../common/img/boc_home_logo.png")
      background-size 120px 32px
      background-repeat no-repeat
      @media only screen and (max-width: 412px)
        margin-left 70px
        @media only screen and (max-width: 360px)
          margin-left 60px
    .add
      flex 1
      margin-top 15px
      background-image url("../../common/img/icon_menu_add.png")
      background-size 20px
      background-repeat no-repeat

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
        & > .home-icon
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
        & > .home-icon
          width 40px
          height 40px
  .rail
    width 100%
    height 8px
    background rgb(233, 234, 238)
  .daily
    display inline-block
    width 100%
    height 78px
    padding 7px 16px
    .daily-content
      display inline-block
      width 110px
      height 60px
      padding-top 11px
      padding-left 10px
      @media only screen and (max-width: 360px)
        width 106px
        padding-top 15px
        padding-left 10px
      & > img
        width 35px
        height 35px
        vertical-align middle
        border-radius 50%
        @media only screen and (max-width: 360px)
          width 30px
          height 30px
      & > span
        font-size 14px
        font-weight bold
    .daily-content:nth-child(1)
      background-color rgb(243, 146, 129)
    .daily-content:nth-child(2)
      background-color rgb(149, 206, 168)
    .daily-content:nth-child(3)
      background-color rgb(243, 146, 129)
</style>
