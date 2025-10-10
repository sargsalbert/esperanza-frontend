import type { NextConfig } from 'next';

const isVercel = process.env.VERCEL === '1';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,

  images: {
    unoptimized: !isVercel,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.esperanzaresort.lt',
        pathname: '/**',
      },
    ],
    domains: ['localhost:3000', 'media.esperanzaresort.lt'],
  },
};

export default nextConfig;
