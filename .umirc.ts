import { defineConfig } from 'dumi';

const getPublicPath = () => {
  return process.env.NODE_ENV === 'production' ? './' : '/';
};
export default defineConfig({
  title: 'l-ui',
  favicon: `${getPublicPath()}favicon.ico`,
  logo: `${getPublicPath()}logo.png`,
  outputPath: 'docs-dist',
  publicPath: getPublicPath(),
  history: {
    type: 'hash',
  },
});
