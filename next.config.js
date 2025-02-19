// import createMDX from '@next/mdx'
const createMDX = require("@next/mdx");
const configJson = require("./config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Conditional for subpath? https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/
  assetPrefix: configJson.basePath,
  basePath: configJson.basePath,
  reactStrictMode: true,
  swcMinify: true,
  // https://stackoverflow.com/questions/60951575/next-js-using-sass-variables-from-global-scss
  // sassOptions: {
  //   includePaths: ["./src"],
  //   prependData: `@import "~@styles/variable.scss";`,
  // },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

module.exports = withMDX(nextConfig);
