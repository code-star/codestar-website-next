const configJson = require("./config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Conditional for subpath? https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/
  assetPrefix: configJson.basePath,
  basePath: configJson.basePath,
  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
