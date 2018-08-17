const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const { NODE_ENV } = process.env;
const IS_BUILD = process.env.npm_lifecycle_event === 'build';

const config = {
  devtool: IS_BUILD ? 'source-map' : 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    filename: IS_BUILD ? '[name].[chunkhash].bundle.js' : '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                localIdentName: '[name]-[local]__[hash:base64:5]',
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      env: NODE_ENV,
    }),
    new ExtractTextPlugin({
      filename: IS_BUILD ? '[name].[contenthash].css' : '[name].css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(IS_BUILD ? 'production' : 'local'),
        HOSTMAKER_ENV: JSON.stringify(NODE_ENV),
      },
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: true,
  },
};

module.exports = config;
