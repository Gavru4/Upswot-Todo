const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  // ...
  plugins: [
    // Whatever other plugins you may have
  ],
};

const configWithTimeMeasures = new SpeedMeasurePlugin().wrap(config);
configWithTimeMeasures.plugins.push(new MiniCssExtractPlugin({}));

module.exports = configWithTimeMeasures;
