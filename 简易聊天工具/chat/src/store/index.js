import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  currentTreadID: 'null',
  threads: {},
  /*
   id: {    id==threadID
   id,
   name
   message: [ 'm_3','m_5' id]
   lastMessage
   isRead:
   }
   */
  messages: {}
  /*
  'm_3': {
    id: 'm_3',
    threadID: 't_1',
    threadName: 'Jing and Bill',
    authorName: 'Jing',
    text: 'Sounds good.  Will they be serving dessert?',
    timestamp: Date.now() - 19999
  }
   */
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
