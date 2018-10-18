module.exports = {

  mode: 'development',

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: [
            [
              '@babel/env',
              { modules: false,  targets: { chrome: "52" } },
            ],
          ],
          plugins: [
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread',
          ],
        },
      },
    ],
  },

};
