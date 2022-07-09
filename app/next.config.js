/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@clv/components',
  '@clv/literals',
])

const nextConfig = {
  dir: './src',
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
