// require("@babel/polyfill")
const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const APP_DIR = path.resolve(__dirname, 'src')

function getDirectoryPathForBuildingResource() {
  return process.env.NODE_ENV !== 'production'
    ? path.resolve(__dirname, 'build/dev')
    : path.resolve(__dirname, 'build/prod')
}

const VENDOR_LIBS = ['react', 'react-dom', 'react-router']

const WebpackConfig = {
  context: path.resolve(__dirname),
  node: {
    dns: 'mock',
    net: 'mock',
    fs: 'empty',
  },
  entry: {
    bundle: [`${APP_DIR}/index.js`],
    vendor: VENDOR_LIBS, // specifying which and all libraries the vendor file will contain
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
    ],
    sideEffects: true,
    concatenateModules: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        main: {
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },
  output: {
    path: getDirectoryPathForBuildingResource(), // output directory
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },

  // include all these modules.
  // these modules will compile our code so we can use it in the browser.
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        include: APP_DIR,
        options: {
          presets: ['@babel/env', '@babel/react'],
          plugins: [
            'lodash',
            ['import', { libraryName: 'antd', style: 'css' }],
            'syntax-dynamic-import',
            'transform-function-bind',
            'transform-class-properties',
          ],
        },
      },
      {
        test: /\.style.js$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: { parser: 'sugarss', exec: true } },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'file-loader',
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },

  // load all these plugins
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new MiniCssExtractPlugin({
      // both options are optional
      filename: 'styles-[hash:8].css',
    }),
    new HTMLWebpackPlugin({
      inject: true,
      template: 'public/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    process.env.NODE_ENV
      ? () => {}
      : new webpack.optimize.AggressiveMergingPlugin(),
  ],

  // this will resolve the path in the components we will write
  // this will help us get rid of the ugly  Ex: '../../filetoinclude' syntax and we can just say app/file to import it.
  resolve: {
    alias: {
      app: APP_DIR,
      public: getDirectoryPathForBuildingResource(),
    },
    extensions: ['.js', '.json'],
  },
}

module.exports = WebpackConfig
