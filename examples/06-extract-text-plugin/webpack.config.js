const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractTextLoader = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader',
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },

      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=1000&name=/images/[hash].[ext]',
      },

      {
        test: /\.(css)$/i,
        use: extractTextLoader,
      },

    ],
  },

  plugins: [
    new ExtractTextPlugin({ filename: '[name].css'}),
    new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({
      title: 'webpack by example',
      template: './src/index.html',
    }),
  ],
};
