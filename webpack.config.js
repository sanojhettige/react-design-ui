const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx','.scss'],
    roots: [path.resolve(__dirname, './src')],
    alias: {
      'common-ui': '/commonUI',
      components: '/components',
      containers: '/containers',
    },
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  devServer: {
    stats: 'minimal',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: './public/images', to: 'images' },
        { from: './public/fonts', to: 'fonts' },
      ],
    }),
  ],
};
