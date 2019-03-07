const path = require('path');

module.exports = {
  publicPath: '/',
  rootPath: process.cwd(),
  staticPath: path.resolve(process.cwd(), 'dist'),
  srcPath: path.resolve(process.cwd(), 'src'),
  entryPath: path.resolve(process.cwd(), 'src/index.js'),
  libPath: path.resolve(process.cwd(), 'node_modules'),
  pagesPath: path.resolve(process.cwd(), 'src/pages'),
  componentsPath: path.resolve(process.cwd(), 'src/components'),
  constantsPath: path.resolve(process.cwd(), 'src/constants'),
  utilsPath: path.resolve(process.cwd(), 'src/utils'),
  assetsPath: path.resolve(process.cwd(), 'src/assets'),
  layoutPath: path.resolve(process.cwd(), 'src/layout'),
  constantCssPath: path.resolve(process.cwd(), 'src/assets/style/constant.scss'),
  resetCssPath: path.resolve(process.cwd(), 'src/assets/style/reset.scss'),
  mixinCssPath: path.resolve(process.cwd(), 'src/assets/style/mixin.scss'),
  iconCssPath: path.resolve(process.cwd(), 'src/assets/style/iconfont.scss')
};
