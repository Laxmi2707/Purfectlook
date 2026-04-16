const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const environment = require('./configuration/environment');

const isProduction = process.env.NODE_ENV === 'production';

// HTML templates
const templateFiles = fs.readdirSync(environment.paths.source)
  .filter((file) => ['.html', '.ejs'].includes(path.extname(file).toLowerCase()))
  .map((filename) => ({
    input: filename,
    output: filename.replace(/\.ejs$/, '.html'),
  }));

const htmlPluginEntries = templateFiles.map((template) =>
  new HTMLWebpackPlugin({
    inject: true,
    filename: template.output,
    template: path.resolve(environment.paths.source, template.input),
    minify: isProduction
      ? {
          removeComments: true,
          collapseWhitespace: true,
        }
      : false,
  })
);

module.exports = {
  entry: {
    app: path.resolve(environment.paths.source, 'js', 'app.js'),
  },

  output: {
    filename: 'js/[name].[contenthash].js',
    path: environment.paths.output,
    clean: true, // auto clean dist/
  },

  module: {
    rules: [
      // ✅ SCSS / CSS
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          isProduction
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      // ✅ JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      // ✅ Images
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[name][ext]',
        },
      },

      // ✅ Fonts
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),

    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(environment.paths.source, 'images'),
          to: path.resolve(environment.paths.output, 'images'),
          noErrorOnMissing: true,
        },
        {
          from: path.resolve(environment.paths.source, 'videos'),
          to: path.resolve(environment.paths.output, 'videos'),
          noErrorOnMissing: true,
        },
      ],
    }),

    ...htmlPluginEntries,
  ],

  optimization: {
    minimize: isProduction,
    splitChunks: {
      chunks: 'all',
    },
  },

  devServer: {
    static: {
      directory: environment.paths.output,
    },
    port: 8080,
    hot: true,
    open: true,
  },

  mode: isProduction ? 'production' : 'development',
  target: 'web',
};
