import { createVuePlugin } from 'vite-plugin-vue2';
import viteComonents, {
  VuetifyResolver,
} from 'vite-plugin-components';
import path from 'path';

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
      {
        find: 'src/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],
  },
  plugins: [
    createVuePlugin(),
    viteComonents({
      customComponentResolvers: [
        VuetifyResolver(),
      ],
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          '@import "./node_modules/vuetify/src/styles/styles.sass";', // original default variables from vuetify
          // vuetify variable overrides
          // '@import "@/scss/variables.scss";',
          '',
        ].join('\n'),
      },
    },
  },
};
