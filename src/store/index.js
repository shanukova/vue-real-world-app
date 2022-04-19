import { reactive } from 'vue'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Victoria Pagank'
  },
  mutations: {},
  actions: {},
  modules: {}
})

reactive({
  flashMessage: '',
  event: null
})

export { reactive }
