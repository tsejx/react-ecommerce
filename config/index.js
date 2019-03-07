const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const OpenBrowser = require('open-browser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// import ManifestPlugin from 'webpack-manifest-plugin';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const HappyPack = require('happypack')
// const ParallelUgilifyPlugin = require('')
// const DllPlugin = require('')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const base = require('./base.js');

const env = process.env.NODE_ENV;

// const config = env === 'development' ? require('./packer/dev.js') : require('./packer/prod.js');
// ------------------

module.exports = {
  mode: env === 'development' ? 'development' : 'production',
  // mode: 'development',

  entry: {
    index: base.entryPath,
    // vendor: ['react', 'react-dom'],
  },

  output: {
    filename: '[name].[hash:5].js',
    publicPath: base.publicPath,
    path: base.staticPath,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: base.srcPath,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            // options: {
            //   modules: true,
            //   localIdentName: '[name]__[local][hash:base64:5]',
            // },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                // require('precss'),
                require('autoprefixer'),
              ],
            },
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [base.resetCssPath, base.mixinCssPath, base.constantCssPath],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // limit: 10000,
              // name: '[name].[sha512:hash:base64:5].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // filename: env ? '[name].css' : '[name].[hash:5].css',
      filename: '[name].css',
      // chunkFilename: env ? '[id].css' : '[id].[hash:5].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      path: base.staticPath,
      template: './src/index.html',
      title: 'Nike.com',
      hash: true,
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'server',
    //   analyzerPort: 5678,
    //   openAnalyzer: true,
    // }),
  ],

  resolve: {
    alias: {
      '@pages': base.pagesPath,
      '@components': base.componentsPath,
      '@constants': base.constantsPath,
      '@utils': base.utilsPath,
      '@assets': base.assetsPath,
      '@layout': base.layoutPath,
    },
    extensions: ['.js', '.scss', '.css'],
    modules: [base.libPath],
    // mainFields: ['jsnext:main', 'main'],
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

  watch: true,

  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },

  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8080,
    compress: true,
    open: true,
    hot: true,
    noInfo: true,
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
