import * as api from '../api'
import * as types from './mutation-types'

export const getAllMessage = ({commit}) => {
  api.getAllMessages(message => {
    commit(types.RECEIVE_ALL, {message})
  })
}
export const sendMessage = ({commit}, payload) => { // payload ==={ text, thread }
  api.createMessage(payload, message => {
    commit(types.RECEIVE_MESSAGE, {message})
  })
}
