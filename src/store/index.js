import Vuex from 'vuex';

export default Vuex.createStore({
  state: {
    time: new Date(),
  },
  mutations: {
    setTime(state, time) {
      state.time = time;
    },
  },
  actions: {
  },
  modules: {
  },
});
