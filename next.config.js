/** @type {import('next').NextConfig} */
const { hostname } = require("os");
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.stack.imgur.com",
      },
    ],
  },
};

module.exports = nextConfig;
