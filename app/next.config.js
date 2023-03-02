/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@next-skeleton/components',
  '@next-skeleton/literals',
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
