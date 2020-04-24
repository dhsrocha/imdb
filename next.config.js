const path = require("path");

module.exports = {
  webpack(config, { dev }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, ".")
    };
    return config;
  }
};
