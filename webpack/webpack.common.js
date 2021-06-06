const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    "code-camp": path.resolve(__dirname, '..', './src/codeCamp/index.tsx'),
    "index": path.resolve(__dirname, '..', './src/homePage/index.tsx'),
    },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'code-camp.html',
      template: path.resolve(__dirname, '..', './src/codeCamp/index.html'),
     chunks: ['code-camp']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '..', './src/homePage/static/index.html'),
     chunks: ['index']
    }),
    new CleanWebpackPlugin(),
  ],
  stats: 'errors-only',
}
