/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env:{
    //   BACK_END_URL:'https://parabot-backend.vercel.app'
      // BACK_END_URL:'https://parabot-server.vercel.app'
      BACK_END_URL:'https://fw9-parabot-backend-mkkn.vercel.app'
      // BACK_END_URL:'http://localhost:3335'
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
