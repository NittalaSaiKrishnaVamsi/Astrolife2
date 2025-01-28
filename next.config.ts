import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://vedicastroapi.com/api/:path*', // Proxy to API
      },
    ];
  },
};

export default nextConfig;
