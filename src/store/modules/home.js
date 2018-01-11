const Add = 'Add'
const Tab = 'Tab'

// initial state
const state = {
  selected:'/home'
}

// getters
const getters = {
  selected:state=>state.selected
}

// actions
const actions = {
  tab( {commit, state}, val ){
    console.log(state,val)
    commit(Tab,val)
  }
}

// mutations 改变状态
const mutations = {
  Tab (state,val) {
    console.log(val)
    state.selected=val
  },
  updateSelect (state,value) {
    state.selected=value
    
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
