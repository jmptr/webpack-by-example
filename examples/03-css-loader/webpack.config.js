module.exports = {

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },

      {
        test: /\.(css)$/i,
        loader: 'css-loader',
      },
    ],
  },

};
