const path = require('path');

module.exports = {
  entry: './extension/content.js',
  output: {
    filename: 'content.bundle.js',
    path: path.resolve(__dirname, 'extension'),
  },
  resolve: {
    fallback: {
        "querystring": false,
        "http": false,
        "https": false,
        "zlib": false,
        "url": false,
        "path": require.resolve("path-browserify")

    }
},
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
