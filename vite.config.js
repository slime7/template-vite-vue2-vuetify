import { createVuePlugin } from 'vite-plugin-vue2';
import viteComponents, {
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
    viteComponents({
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
      sass: {
        additionalData: [
          // vuetify variable overrides
          '@import "@/assets/styles/variables"',
          '',
        ].join('\n'),
      },
    },
  },
};
