const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: { main: './src/index.js',
           about: './src/about/about.js',
           analytics: './src/analytics/analytics.js'
          },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use:  [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] 
      },
      {
        test: /\.(svg|jpg|png|ico|gif)$/,
        use: [
                'file-loader?name=./images/[name].[ext]',
                {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, 
                            disable: true, 
                        }
                },
        ]
 },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
      },
      
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ // 
      filename: 'style.[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/analytics/analytics.html',
      filename: 'analytics.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/about/about.html',
      filename: 'about.html'
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
})
  ]
};