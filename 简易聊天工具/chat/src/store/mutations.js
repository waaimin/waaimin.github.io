import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.RECEIVE_ALL] (state, {message}) {
    let lastMsg
    message.forEach(m => {
      // 查询当前message对应的房间是否已经存在,如果不存在创建该房间
      if (!state.threads[m.threadID]) {
        // vuex中 如果我们的state是对象不能直接通过键值对赋值添加新的键值对
        // 只能通过Vue.set(obj,key,value)方法
        createTread(state, m.threadID, m.threadName)
      }
      if (!lastMsg || m.timestamp > lastMsg.timestamp) {
        lastMsg = m
      }
      // 将制定信息添加到指定的房间
      addMessage(state, m)
    })
    state.currentTreadID = lastMsg.threadID
  },
  [types.SWITCH_THREAD] (state, id) {
    state.currentTreadID = id
  },
  [types.RECEIVE_MESSAGE] (state, {message}) {
    addMessage(state, message)
  }
}

function createTread (state, id, name) {
  Vue.set(state.threads, id, {
    id,
    name,
    messages: [],
    lastMessage: null
  })
}

function addMessage (state, message) {
  const thread = state.threads[message.threadID]
  // 避免重复添加
  if (!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id)
    thread.lastMessage = message
  }
  Vue.set(state.messages, message.id, message)
}
