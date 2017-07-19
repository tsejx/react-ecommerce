const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifier = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const base = require('./base.js');

module.exports = {
  context: base.rootPath,
  entry: {
    main: ['./src/app.js'],
    common: ['react', 'react-dom']
  },
  output: {
    path: base.staticPath,
    filename: 'assets/[name]_[hash:5].js',
    publicPath: base.publicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: base.srcPath,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {loader: 'css-loader', options: {minimize: false, modules: false, localIdentName: '[name]__[local]__[hash:base64:5]'}}
        })
      },
      {
        test: /\.css$/,
        include: base.libPath,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {loader: 'css-loader', options: {modules: false}}
        })
      },
      {
        test: /\.jsx?$/,
        include: base.srcPath,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
        use: {loader: 'file-loader', options: {name: 'assets/[name]_[sha512:hash:base64:7].[ext]'}}
      },
      {
        test: /\.scss$/,
        include: base.srcPath,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    alias: {},
    modules: [base.libPath, base.srcPath]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new WebpackNotifier({
      title: '编译完成',
      alwaysNotify: true,
      contentImage: base.masterPath
    }),
    new HtmlWebpackPlugin({
      favicon: './favicon.ico',
      template: './src/index.html',
      filename: 'index.html',
      title: 'React App',
      inject: 'body',
      minify: false  // https://github.com/kangax/html-minifier#options-quick-reference
    }),
    new ExtractTextPlugin({
      filename: 'assets/[name]_[hash].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: function (module) {
        if(module.resource && (/^.*\.(css|scss|less)$/).test(module.resource)) {
            return false;
        }
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        PT: 'prop-types'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
