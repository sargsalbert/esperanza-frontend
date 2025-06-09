import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,

  /* config options here */
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: '1337',
    //     pathname: '/uploads/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'esperanza-media-storage.fra1.digitaloceanspaces.com',
    //   },
    // ],

    domains: [
      'localhost:3000',
      'esperanza-media-storage.fra1.digitaloceanspaces.com',
      'esperanza-media.fra1.digitaloceanspaces.com',
    ], // or your production Strapi domain like 'cms.mywebsite.com'
  },
};

export default nextConfig;
