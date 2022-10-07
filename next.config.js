const configJson = require("./config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: configJson.basePath,
  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
