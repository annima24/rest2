const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js','./src/UI.js','./src/project.js'],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};