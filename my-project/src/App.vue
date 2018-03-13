<template>
  <div id="app">
    <div class="tab">
      <div class="tab-item">
        <router-link to="home">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="invest">咨询</router-link>
      </div>
      <div class="tab-item">
        <router-link to="life">生活</router-link>
      </div>
      <div class="tab-item">
        <router-link to="mine">个人</router-link>
      </div>
    </div>
    <router-view :home="home"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        home: {}
      }
    },
    created() {
      this.$axios.get('/api/home')
        .then((res) => {
          res = res.data
          if (res.errno === 0) {
            this.home = res.data
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
  #app
    .tab
      position fixed
      display flex
      width 360px
      height 40px
      line-height 40px
      color back
      bottom 0
      z-index 50
      .tab-item
        flex 1
        text-align center
        color black
        background #F4FFFD
        & > a
          display inline-block
          font-size 15px
      .active
        color red
</style>
