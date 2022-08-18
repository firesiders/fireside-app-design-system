import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import reactCssModule from 'vite-plugin-react-css-modules';

const generateScopedName = '[name]__[local]___[hash:base64:5]';

export default defineConfig({
  plugins: [
    reactCssModule({
      generateScopedName,
      filetypes: {
        '.less': {
          syntax: 'postcss-less',
        },
      },
    }),
    reactRefresh(),
  ],
  css: {
    modules: {
      generateScopedName,
    },
  },
});
