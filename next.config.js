const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        logger: path.join(__dirname, "src/utils/logger"),
      })
    );
    return config;
  },
};
