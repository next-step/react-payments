const CracoAlias = require("craco-alias");
module.exports = {
  webpack: {
    optimization: {
      minimize: false,
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
        debug: false,
      },
    },
  ],
};
