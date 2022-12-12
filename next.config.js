/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   images: {
    formats: ['image/jpg', 'image/webp'],
     domains: ['https://ecommerce-dango.netlify.app/'],
  },
}

module.exports = nextConfig
