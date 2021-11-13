/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack5: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  webpack: (config, { isServer }) => {
    // faster rebuilds for many files:
    config.module.unsafeCache = true
    // workarounds for windows:
    config.plugins.push(c => (c.options.devtool = 'eval-source-map'))
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        module: false,
        fs: false,
        path: false
      }
    }

    return config
  }
}
