/** @type {import('next').NextConfig} */
const withPreact = require("next-plugin-preact");
const nextConfig = withPreact({
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  swcMinify: true,
})

module.exports = nextConfig
