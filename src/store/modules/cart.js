import * as types from '../actionType'

// initial state
// shape: [{ id, quantity }]
const state = {
  count: 0
}

// getters
const getters = {
  count:state=>state.count
}

// actions
const actions = {
  add (state) {
    console.log(state)
    commit(types.Add)
  }
}

// mutations
const mutations = {
  [types.Add] (state) {
    state.count++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
