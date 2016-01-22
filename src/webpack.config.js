var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolveLoader: {
    root: [ "/install/node_modules", process.env.NODE_PATH ]
  },
  resolve: {
    root: [ "/install/node_modules", process.env.NODE_PATH, "/usr/src/app" ]
  },
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './public/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'public')
    }]
  },
  watchOptions: { poll: true },
  devServer: {
    port: 3000,
    host: "0.0.0.0",
    inline: true
  }
};