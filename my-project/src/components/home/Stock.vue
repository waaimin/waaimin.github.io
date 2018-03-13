<template>
  <div class="stock">
    <div class="stock-wrapper">
      <div class="person">
        <span class="person-left">{{home.focus}}</span>
        <span class="person-right">{{home.custom}}</span>
      </div>
      <ul class="uls">
        <li class="lis" v-for="(msg,index) in home.stock" :key="index">
          <div>
            <span class="species">[{{msg.species}}]</span>
            <span class="coarse">
              {{msg.name}}
              ({{msg.unit}})/{{msg.currency}}
            </span>
          </div>
          <div class="names">
            <span>{{msg.as}}</span>
            <span>{{msg.buy}}</span>
            <span>{{msg.sell}}</span>
          </div>
          <div class="num">
            <span class="up">--</span>
            <span class="buyPrice">{{msg.buyPrice}}</span>
            <span class="sellPrice">{{msg.sellPrice}}</span>
          </div>
          <span class="daily"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      home: Object
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .stock
    width 100%
    height 464px
    .stock-wrapper
      width 100%
      height 464px
      .person
        width 100%
        height 40px
        border-left 2px solid red
        border-bottom 1px solid #ccc
        .person-left
          display inline-block
          width 320px
          height 26px
          margin-left 7px
          margin-top 7px
          @media only screen and (max-width: 360px)
            width 300px
        .person-right
          width 20px
          height 30px
          font-weight bold
          color #419eff
    .uls
      width 100%
      height 388px
      .lis
        width 100%
        height 130px
        padding-top 5px
        & > div
          font-size 16px
          .species
            padding-left 15px
          .coarse
            font-weight bold
        .names
          width 100%
          height 40px
          & > span
            display inline-block
            padding-left 50px
            padding-top 10px
            font-size 14px
        .num
          width 100%
          height 40px
          .up
            display inline-block
            padding-left 54px
            padding-top 10px
            font-weight bold
          .buyPrice
            display inline-block
            padding-left 69px
            padding-top 10px
            font-weight bold
          .sellPrice
            display inline-block
            padding-left 70px
            padding-top 10px
            font-weight bold
        .daily
          display inline-block
          width 100%
          height 10px
          background #ccc
</style>
