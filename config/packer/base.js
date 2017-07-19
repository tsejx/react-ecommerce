const path = require('path');

module.exports = {
  publicPath: '/',
  staticPath: path.resolve(process.cwd(), 'dist'),
  rootPath: process.cwd(),
  srcPath: path.resolve(process.cwd(), 'src'),
  libPath: path.resolve(process.cwd(), 'node_modules'),
  masterPath: path.resolve(process.cwd(), 'config', 'head.png'),
  semanticPath: path.resolve(process.cwd(), 'node_modules/semantic-ui-css')
}