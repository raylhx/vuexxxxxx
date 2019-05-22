import Vue from 'vue'
import Vuex from 'vuex'
import btnStore from './btnStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    btn: btnStore
  }
})
