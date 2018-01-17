import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex);
/**/
const store = new Vuex.Store({
  state: {
    userInfo:{},             // 用户基本信息  是否登录 等
    accountInfo:{},          // 账户基本信息 资产信息等
    childInfo:{},            // 亲子计划中的基本信息
    navStyle:'nav-transparent',
  },
  mutations,
});

export default store
