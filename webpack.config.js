const path = require('path') // eslint-disable-line
const webpack = require('webpack') // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: path.join(__dirname, '/lib/app.tsx'),
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader',
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        }],
      },
      {
        test: /\.md$/,
        use: [{
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img',
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: './build',
    hot: true,
    port: 9010,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    filename: 'bundle.dev.js',
    path: path.join(__dirname, '/build'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
}