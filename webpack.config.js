const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;

const config = {
  entry: path.join(__dirname, 'src', 'main.js'),
  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  },
  mode: env,
  output: {
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      // Must be specified for HtmlWebpackPlugin to work correctly.
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.svg(\?.*)?$/, // match img.svg and img.svg?param=value
        use: [
          'url-loader?url=false', // or file-loader or svg-url-loader
          'svg-transform-loader'
        ]
      },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      inject: true,
    }),
  ],
};

module.exports = config;
