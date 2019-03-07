const path = require('path');
const express = require('express');
const app = express();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const OpenBrowser = require('open-browser-webpack-plugin');
const base = require('./packer/base');

const env = process.env.NODE_ENV;
const PORT = 8080;

const webpackConfig = env === 'production' ? require('./packer/prod.js') : require('./packer/dev.js');

for(let key in webpackConfig.entry){
  webpackConfig.entry[key].unshift('webpack-hot-middleware/client');
}

webpackConfig.plugins.push(new OpenBrowser({url: `http://localhost:${PORT}`}));

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  index: path.resolve(process.cwd(), 'src/index.html'),
  publicPath: base.publicPath,
  stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
  path: '/__webpack_hmr',
  timeout: 20000,
  reload: true
}));

app.get('/*', (req, res) => {
  res.sendFile(process.cwd(), 'src/index.html')
});

app.listen(PORT, (err) => {
  if(err) console.log(err.stack);
  console.log(`Server is running at PORT: ${PORT}.`);
});
