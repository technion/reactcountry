const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin


config = {
  context: __dirname,
  // Compat must be a separate entry point, to ensure it can execute
  // even when the browser can't parse the main bundle.
  entry: {
    country: "./src/country-entry.tsx",
    compat: "./src/compat.tsx"
  },
  resolve: {
    extensions: [".tsx", ".js", ".d.ts"],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/build"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.template.html"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      }
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    console.log("Running webpack prod build");
    config.plugins.push(
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),
    );
  } else {
    console.log("Running webpack dev build");
    config.devtool = "inline-source-map";
  }

  if (process.env.ANALYZE) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: "report.html"
      })
    );
  }
  return config;
}
