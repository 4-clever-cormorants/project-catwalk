const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');

const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-react-jsx'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
      },
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      test: /\.m?js|jsx$/,
    })],
  },
};
