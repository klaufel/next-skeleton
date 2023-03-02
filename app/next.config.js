/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['@next-skeleton/components', '@next-skeleton/literals'],
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
