import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import zhHans from 'vuetify/es5/locale/zh-Hans';
import '../assets/styles/material-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { zhHans },
    current: 'zhHans',
  },
  icons: {
    iconfont: 'md',
  },
});
