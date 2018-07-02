const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', { targets: { chrome: '52' } }],
              ],
            },
          },
        ],
      },

      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=1000&name=/images/[hash].[ext]',
      },

      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader'],
      },

    ],
  },

  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({
      title: 'webpack by example',
      template: './src/index.html',
    }),
  ],
};
