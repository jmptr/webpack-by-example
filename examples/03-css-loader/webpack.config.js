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
        test: /\.(css)$/i,
        loader: 'css-loader',
      },
    ],
  },

};
