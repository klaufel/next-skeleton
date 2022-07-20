/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@clv/components',
  '@clv/domain',
  '@clv/literals',
])

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  dir: './src',
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
