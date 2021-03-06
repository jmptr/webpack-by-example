module.exports = {
  mode: 'development',
  devtool: 'source-map',
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
