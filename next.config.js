/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   images: {
    formats: ['image/jpg', 'image/webp'],
  },
}

module.exports = nextConfig
