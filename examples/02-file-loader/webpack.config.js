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
                ['env', { targets: { node: 'current' } }],
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=1000&name=/images/[hash].[ext]',
      },
    ],
  },

};
