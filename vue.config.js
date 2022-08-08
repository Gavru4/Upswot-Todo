const { defineConfig } = require("@vue/cli-service");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  // plugins: [new MiniCssExtractPlugin()],
});
