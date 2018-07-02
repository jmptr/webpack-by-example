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
    ],
  },

};
