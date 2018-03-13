<template>
  <div class="thread-selection">
    <div class="thread-count">
      <span>Unread threads:4</span>
    </div>
    <ul class="thread-list">
      <li class="thread-item"
          v-for="thread in threads"
          :key="thread.id"
          :class="{'active': id === thread.id}"
          @click="switchThread(thread.id)">
        <h5 class="thread-title">{{thread.name}}</h5>
        <div class="thread-time">{{thread.lastMessage.timestamp}}</div>
        <div class="thread-text">{{thread.lastMessage.text}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapState } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['threads']),
      ...mapState({id: 'currentTreadID'})
    },
    methods: mapMutations({
      switchThread: 'SWITCH_THREAD'
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .thread-selection {
    width: 200px;
    border: 1px solid #bbb;
    font-size: 0;
  }

  .thread-count {
    font-size: 12px;
    line-height: 40px;
    border-bottom: 2px solid #ccc;
  }

  .thread-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .thread-item {
    border-bottom: 1px solid #ccc;
    text-align: center;
    position: relative;
  }
  .thread-item.active{
    background: #eee;
  }

  .thread-item .thread-title {
    padding: 0;
    text-align: left;
    margin: 5px auto;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
  }

  .thread-item .thread-text {
    margin: 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    color: #777;
  }

  .thread-item .thread-time {
    position: absolute;
    right: 5px;
    top: 15px;
    text-align: right;
    color: blue;
    font-size: 12px;
  }

</style>
