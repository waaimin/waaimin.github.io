<template>
  <div class="hotspot">
    <ul ref="hotspots">
      <li v-for="(img,index) in num.concat(num[0])" :key="index" ref="lis">
        <span class="picture" :class="classMap[img.type]"></span>
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      num: Array
    },
    data() {
      return {
        index: 0,
        timer: 0,
        classMap: ['one', 'two', 'third', 'four', 'five', 'six']
      }
    },
    mounted() {
      if (this.num.length > 1) {
        this.startHotSpotTransition()
      }
    },
    destroyed () {
      clearInterval(this.timer)
    },
    methods: {
      startHotSpotTransition() {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          this.index++
          this.addTransition()
          this.setTranslate()
        }, 1500)
        this.transitionEnd()
      },
      addTransition() {
        let ul = this.$refs.hotspots
        ul.style.transition = 'all 0.5s'
        ul.style.webkitTransition = 'all 0.5s'
      },
      setTranslate() {
        let ul = this.$refs.hotspots
        let li = this.$refs.lis
        let width = li[1].offsetWidth / 10
        let offset = -this.index * width
        ul.style.transform = `translateX(${offset}px)`
        ul.style.webkitTransform = `translateX(${offset}px)`
      },
      transitionEnd() {
        let ul = this.$refs.hotspots
        ul.addEventListener('transitionEnd', () => {
          if (this.index >= this.num.length) {
            this.index = 0
            this.removeTransition()
            this.setTranslate()
          }
        })
        ul.addEventListener('webkitTransitionEnd', () => {
          if (this.index > this.num.length - 1) {
            this.index = 0
            this.removeTransition()
            this.setTranslate()
          }
        })
      },
      removeTransition() {
        let ul = this.$refs.hotspots
        ul.style.transition = 'none'
        ul.style.webkitTransition = 'none'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .hotspot
    width 100%
    height 180px
    overflow hidden
    /*border 1px solid #000*/
    ul
      width 1000%
      height 180px
      .picture
        display inline-block
        width 10%
        height 180px
        /*border 1px solid #000*/
        float left
        background-repeat no-repeat
        background-size 360px 180px
        @media only screen and (max-width: 375px)
          background-size 375px 180px
        @media only screen and (max-width: 412px)
          background-size 412px 180px
        &.one
          background-image url("../../common/img/one.jpg")
        &.two
          background-image url("../../common/img/two.jpg")
        &.third
          background-image url("../../common/img/third.jpg")
        &.four
          background-image url("../../common/img/four.jpg")
        &.five
          background-image url("../../common/img/five.jpg")
        &.six
          background-image url("../../common/img/six.jpg")
</style>
