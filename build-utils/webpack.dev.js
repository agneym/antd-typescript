const webpack = require("webpack");

const commonPaths = require("./common-paths");

const config = {
  devServer: {
    port: 3000,
    open: true,
    host: "0.0.0.0",
    overlay: true,
    hot: true,
    useLocalIp: true,
    historyApiFallback: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.less$/,
        include: [/[\\/]node_modules[\\/].*antd/],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "less-loader",
            options: {
              modifyVars: require(commonPaths.antdConfig),
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(tsx?|jsx?)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /(node_modules|dist|build-utils|webpack.config.js)/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({ options: {} }), // Fix for eslint with webpack 4
  ],
};

module.exports = config;
