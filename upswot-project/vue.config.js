const { defineConfig } = require("@vue/cli-service");
import MiniCssExtractPlugin from "mini-css-extract-plugin";

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  },
});
