const path = require('path');
const webpack = require('webpack');

const WebpackDevServer = require('webpack-dev-server');
const OpenBrowser = require('open-browser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const base = require('./packer/base.js');

const resolve = src => path.resolve(__dirname, src);

const env = process.env.NODE_ENV;

// const config = env === 'development' ? require('./packer/dev.js') : require('./packer/prod.js');
// ------------------

module.exports = {
  mode: env === 'development' ? 'development' : 'production',
  // mode: 'development',

  entry: {
    index: './src/index.js',
    // vendor: ['react', 'react-dom'],
  },

  output: {
    filename: '[name].[hash:5].js',
    publicPath: resolve('/'),
    path: resolve('./dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          env ? 'style-laoder' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[sha512:hash:base64:5].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new MiniCssExtractPlugin({
      // filename: env ? '[name].css' : '[name].[hash:5].css',
      filename: '[name].css',
      // chunkFilename: env ? '[id].css' : '[id].[hash:5].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      // path: resolve('dist'),
      template: './src/index.html',
      title: 'ReactApp',
      hash: true,
    }),
  ],

  resolve: {
    alias: {},
    extensions: ['.js'],
    // modules: [resolve('src'), 'node_modules'],
  },

  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourcMap: true
      // }),
      // new OptimizeCssAssetsPlugin({}),
    ],
    // splitChunks: {
    //   cacheGroups: {
    //     // 将所有CSS提取到一个文件中
    //     styles: {
    //       name: 'styles',
    //       test: /\.css$/,
    //       chunks: 'all',
    //       enforce: true,
    //     },
    //   },
    // },
  },

  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8080,
    compress: true,
    open: true,
    hot: true,
    // inline: true,
  },

  devtool: false,

  performance: {},

  stats: {},
};

// ------------------
// for (let key in config.entry) {
//     config.entry[key].unshift(
//         `webpack-dev-server/client?http://localhost:${port}`,
//         'webpack/hot/dev-server'
//     );
// }

// config.plugins.push(new OpenBrowser({
//     url: `http://localhost:${port}`
// }));

// const compiler = webpack(config);

// new WebpackDevServer(compiler, {
//         contentBase: process.cwd(),
//         hot: true,
//         publicPath: base.publicPath,
//         stats: {
//             colors: true
//         },
//         overlay: true,
//         historyApiFallback: true,
//         headers: {
//             "X-Custom-Header": "yes",
//             "X-Powered-By": "Fq"
//         }
//     })
//     .listen(port, (err) => {
//         if (err) {
//             console.log(err.stack);
//         }
//         console.log(`Server is running at PORT: ${port}`);
//     })
