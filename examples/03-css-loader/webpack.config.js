module.exports = {

  module: {
    mode: 'development',

    devtool: 'source-map',
  
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
