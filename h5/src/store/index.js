import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  obj:1
}

const mutations = {
  m(state,n){
    state.obj = n
  }
}

const getters = {
  obj:function (state) {
    return state.obj + '元'
  }
}

const actions = {
  mp(context){
    context.commit('m',state.obj+100)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
