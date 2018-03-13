<template>
  <div>
    <div class="header">
      <span class="place">{{life.place}}</span>
      <span class="title">{{life.title}}</span>
    </div>
    <hot-spot v-if="life.num" :num="life.num"/>
    <div class="business">
      <div class="business-header">
        <span class="account">
          <img class="life-icon" src="../../common/img/boc_menu_account.png">
          <div>{{life.account}}</div>
        </span>
        <span class="transfer">
          <img class="life-icon" src="../../common/img/boc_menu_transfer.png">
          <div>{{life.transfer}}</div>
        </span>
        <span class="credit-card">
          <img class="life-icon" src="../../common/img/boc_menu_credit_card.png">
          <div>{{life.creditCard}}</div>
        </span>
        <span class="loan">
          <img class="life-icon" src="../../common/img/boc_menu_loan.png">
          <div>{{life.loan}}</div>
        </span>
      </div>
      <div class="business-bottom">
        <span class="remit">
          <img class="life-icon" src="../../common/img/boc_img_sb_remit.png">
          <div>{{life.remit}}</div>
        </span>
        <span class="licai">
          <img class="life-icon" src="../../common/img/icon_invest_licai.png">
          <div>{{life.liCai}}</div>
        </span>
        <span class="jijin">
          <img class="life-icon" src="../../common/img/icon_invest_jijin.png">
          <div>{{life.jiJin}}</div>
        </span>
        <span class="more">
          <img class="life-icon" src="../../common/img/boc_cross_border_more.png">
          <div>{{life.more}}</div>
        </span>
      </div>
    </div>
    <div class="rail"></div>
    <div class="detail">
      <div class="content-top">
        <span class="content-top-left">
          <span class="captions">
            <div class="weight">{{life.wonderful}}</div>
            <div class="slight">{{life.wonderfulUes}}</div>
          </span>
          <span class="use">
            <img src="../../common/img/icon_life_jingcaitehui.png" alt="">
          </span>
        </span>
        <span class="content-top-right">
          <span class="captionsq">
            <div class="weightq">{{life.wonderful}}</div>
            <div class="slightq">{{life.wonderfulUes}}</div>
          </span>
          <span class="useq">
            <img src="../../common/img/icon_life_jingcaitehui.png" alt="">
          </span>
        </span>
      </div>
      <div class="content-bottom">
        <span class="content-bottom-left">
          <span class="captionsw">
            <div class="weightw">{{life.wonderful}}</div>
            <div class="slightw">{{life.wonderfulUes}}</div>
          </span>
          <span class="usew">
            <img src="../../common/img/icon_life_jingcaitehui.png" alt="">
          </span>
        </span>
        <span class="content-bottom-right">
          <span class="captionse">
            <div class="weighte">{{life.wonderful}}</div>
            <div class="slighte">{{life.wonderfulUes}}</div>
          </span>
          <span class="usee">
            <img src="../../common/img/icon_life_jingcaitehui.png" alt="">
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import HotSpot from './HotSpot'

  export default {
    data() {
      return {
        life: {}
      }
    },
    components: {
      HotSpot
    },
    created() {
      this.$axios.get('/api/life')
        .then((res) => {
          res = res.data
          if (res.errno === 0) {
            this.life = res.data
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
  .header
    width 100%
    height 50px
    /*border 1px solid #000*/
    .place
      display inline-block
      width 80px
      height 35px
      text-align center
      line-height 50px
    .title
      display inline-block
      width 200px
      height 35px
      padding-left: 80px
      line-height 50px
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
        & > .life-icon
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
        & > .life-icon
          width 40px
          height 40px
  .rail
    width 100%
    height 20px
    background rgb(233, 234, 238)
  .detail
    width 100%
    height 300px
  .content-top
    width 100%
    height 100px
    .content-top-left
      display inline-block
      width 50%
      height 70px
      float: left
      border 1px solid #ccc
      .captions
        display inline-block
        width 70%
        height 70px
        padding-left 20px
        padding-top 10px
        /*border 1px solid #ccc*/
        float left
        .weight
          font-weight bold
      .use
        display inline-block
        width 30%
        height 70px
        /*border 1px solid #000*/
        float left
        & > img
          margin-top:9px
    .content-top-right
      display inline-block
      width 50%
      height 70px
      float: left
      border 1px solid #ccc
      .captionsq
        display inline-block
        width 70%
        height 70px
        padding-left 20px
        padding-top 10px
        /*border 1px solid #ccc*/
        float left
        .weightq
          font-weight bold
      .useq
        display inline-block
        width 30%
        height 70px
        /*border 1px solid #000*/
        float left
        & > img
          margin-top:9pxf

  .content-bottom
    width 100%
    height 100px
    .content-bottom-left
      display inline-block
      width 50%
      height 70px
      float: left
      border 1px solid #ccc
      .captionsw
        display inline-block
        width 70%
        height 70px
        padding-left 20px
        padding-top 10px
        /*border 1px solid #ccc*/
        float left
        .weightw
          font-weight bold
      .usew
        display inline-block
        width 30%
        height 70px
        /*border 1px solid #000*/
        float left
        & > img
          margin-top:9px
    .content-bottom-right
      display inline-block
      width 50%
      height 70px
      float: left
      border 1px solid #ccc
      .captionse
        display inline-block
        width 70%
        height 70px
        padding-left 20px
        padding-top 10px
        /*border 1px solid #ccc*/
        float left
        .weighte
          font-weight bold
      .usee
        display inline-block
        width 30%
        height 70px
        /*border 1px solid #000*/
        float left
        & > img
          margin-top:9pxf
</style>
