const autoprefixer = require('autoprefixer');
const DefinePlugin = require('webpack').DefinePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const plugins = [
  new ExtractTextPlugin('styles.css'),
];

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass!postcss')
      },
      {
        test: /\.(gif|png|jpg)$/, loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }
    ]
  },
  plugins: plugins,
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  entry: [
      './src/main.js',
      './index.html',
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
};
