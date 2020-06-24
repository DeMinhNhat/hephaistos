const webpack = require('webpack')
const path = require('path')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const APP_DIR = path.resolve(__dirname, 'src')

function getDirectoryPathForBuildingResource() {
  return process.env.NODE_ENV !== 'production'
    ? path.resolve(__dirname, 'build/dev')
    : path.resolve(__dirname, 'build/prod')
}

const VENDOR_LIBS = ['react', 'react-dom', 'react-router']

const cleanOptions = {
  // root: getDirectoryPathForBuildingResource(),
  exclude: ['index.html'],
  dry: false,
  verbose: true,
  cleanStaleWebpackAssets: true,
  protectWebpackAssets: true,
  cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
  cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],
  dangerouslyAllowCleanPatternsOutsideProject: true,
}

// the compress options to use
const compressOptions = {
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0.8,
}

// the configuration options to use for HTMLWebpackPlugin
const configurationOptions = {
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
}

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
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
      },
    },
  },
  output: {
    path: getDirectoryPathForBuildingResource(), // output directory
    filename: 'scripts/[name].[chunkhash].js',
    chunkFilename: 'scripts/[name].[chunkhash].chunk.js',
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
          {
            loader: 'postcss-loader',
            options: { parser: 'sugarss', exec: true },
          },
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
    new BundleAnalyzerPlugin(),
    new WebpackBar(),
    new CleanWebpackPlugin(cleanOptions),
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
    new MiniCssExtractPlugin({ filename: 'styles-[hash:8].css' }),
    new HTMLWebpackPlugin(configurationOptions),
    new CompressionPlugin(compressOptions),
    new webpack.optimize.AggressiveMergingPlugin(),
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
