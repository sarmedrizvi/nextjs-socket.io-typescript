module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: "empty", module: "empty" };
    }

    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL || "",
  },
};
