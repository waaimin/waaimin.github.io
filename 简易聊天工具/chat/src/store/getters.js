export const threads = state => state.threads
export const currentTread = state => {
  return state.currentTreadID ? state.threads[state.currentTreadID] : null
}
export const currentMessage = state => {
  const thread = currentTread(state)
  return thread ? thread.messages.map(id => state.messages[id]) : []
}
