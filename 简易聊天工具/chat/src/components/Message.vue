<template>
  <div class="message-sevtion">
    <h3 v-if="currentTread">{{currentTread.name}}</h3>
    <ul class="message-list">
      <li v-for="msg in currentMessage" :key="msg.id">
        <span class="author">{{msg.authorName}}:</span>
        <span class="text">{{msg.text}}</span>
        <span>{{msg.timestamp}}</span>
      </li>
    </ul>
    <textarea class="message-input" @keyup.enter="sendMessage"></textarea>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters(['currentTread', 'currentMessage']),
    methods: {
      sendMessage (e) {
        const text = e.target.value
        if (text.trim()) {
          this.$store.dispatch('sendMessage', {text, thread: this.currentTread})
        }
        e.target.value = ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
