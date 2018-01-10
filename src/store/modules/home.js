const Add = 'Add'

// initial state
const state = {
  count: 0
}

// getters
const getters = {
  count:state=>state.count
}

// actions
const actions = {
  add ({ commit, state }) {
    console.log(state)
    commit(Add)
  }
}

// mutations 改变状态
const mutations = {
  Add (state) {
    state.count = state.count+10
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
