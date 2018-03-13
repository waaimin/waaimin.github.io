<template>
  <div id="app">
    <thread class="tread"/>
    <message class="message"/>
  </div>
</template>

<script>
  import Thread from './components/Thread'
  import Message from './components/Message'

  export default {
    name: 'App',
    components: {
      Thread,
      Message
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
    display: flex;
  }

  .tread {
    flex: 0 0 200px;
  }
  .message{
    flex: 1;
  }
</style>
