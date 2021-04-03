import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
    token: Auth.getAuth() ? Auth.getAuth() : ''
  },
  mutations: {
    setToken (state,token) {
      state.token =token;
      Auth.setAuth(token.token)
      // localStorage.setItem("token",token.token);
    },
    delToken (state) {
      state.token = '';
      Auth.removeAuth();
      // localStorage.removeItem("token");
    }
  },
  actions: {
  },
  modules: {
  }
})
