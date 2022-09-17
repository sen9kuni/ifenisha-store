/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
      BACK_END_URL:'https://parabot-backend.vercel.app'
  },

  images: {
      domains: ['res.cloudinary.com', 'images.unsplash.com']
  },

  async rewrites() {
      return [
          {
              destination: '/profile/seller',
              source: '/profile/seller'
          },
          {
              destination: '/profile/customer',
              source: '/profile/customer'
          },
          {
              destination: '/profile/add-product',
              source: '/profile/add-product'
          }
      ];
  },
};



module.exports = nextConfig;
