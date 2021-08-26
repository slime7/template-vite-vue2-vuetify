let timer = null;

const moduleToast = {
  namespaced: true,

  state: {
    msg: '',
    show: false,
    timeout: 6000,
  },

  mutations: {
    setMsg(state, msg) {
      state.msg = msg;
    },
    setTimeout(state, timeout) {
      state.timeout = timeout;
    },
    setShow(state, show) {
      state.show = show;
    },
  },

  actions: {
    show({ state, commit }, { msg, timeout }) {
      if (state.show) {
        clearTimeout(timer);
        commit('setShow', false);
      }
      commit('setMsg', msg);
      commit('setTimeout', timeout);
      commit('setShow', true);
      timer = setTimeout(() => {
        commit('setShow', false);
      }, state.timeout);
    },
  },
};

export default moduleToast;
