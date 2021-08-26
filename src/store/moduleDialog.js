const moduleDialog = {
  namespaced: true,

  state: {
    // { attr: object, title: string, content: string }
    dialogs: [],
    titleClass: 'headline',
    loader: false,
  },

  mutations: {
    pushDialog(state, {
      title = '提示',
      content,
      attr = {},
    }) {
      const defaultAttr = {
        'max-width': 360,
      };
      state.dialogs.push({
        title,
        content,
        attr: Object.assign(defaultAttr, attr, { value: true }),
      });
    },
    popDialog(state) {
      state.dialogs.pop();
    },
    setTitleClass(state, titleClass) {
      state.titleClass = titleClass;
    },
    setLoader(state, show) {
      state.loader = show;
    },
  },

  actions: {
    append({ commit }, dialog) {
      commit('pushDialog', dialog);
    },
    close({ commit }) {
      commit('popDialog');
    },
    showLoader({ commit }) {
      commit('setLoader', true);
    },
    hideLoader({ commit }) {
      commit('setLoader', false);
    },
  },
};

export default moduleDialog;
