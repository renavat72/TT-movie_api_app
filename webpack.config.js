const path = require('path');
 
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode:"development",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$|jsx/,
        exclude: /node_module/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    } 
  },
};