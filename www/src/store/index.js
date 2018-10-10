import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalData: []
  },
  getters: {
    getData(state) {
      console.log(state.totalData, 666);
      return state.totalData;
    }
  },
  mutations: {
    sync(state) {
      console.log("我是同步方法");
      Vue.prototype.$axios.get("/api/getAll").then(res => {
        state.totalData = res.data;
      });
    }
  },
  actions: {
    async({ commit }) {
      console.log("我是异步方法");
      commit("sync");
    }
  }
});
