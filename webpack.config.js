const TransferWebpackPlugin = require('transfer-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',
      './src/app/app.js',
    ],
  },
  devServer: {
    contentBase: 'src/www',
    hot: true,
    inline: true,
    port: 8080,
    host: '0.0.0.0',
  },
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'build'), // Change to dist.
    filename: 'app.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
};
