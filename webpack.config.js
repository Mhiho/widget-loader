const path = require("path");
const webpack = require("webpack");

module.exports = [
  {
    target: "web",
    mode: "development",
    watch: true,
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          exclude: /(node_modules)/,
          test: /\.(js)$/i,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),
    ],
    entry: "./src/index.js",
    output: {
      filename: "web.bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
  },
  {
    target: "node",
    mode: "development",
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          exclude: /(node_modules)/,
          test: /\.(js)$/i,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),
    ],
    output: {
      filename: "node.bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
  },
];
