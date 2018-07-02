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
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=1000&name=/images/[hash].[ext]',
      },

      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader'],
      },

    ],
  },

};
