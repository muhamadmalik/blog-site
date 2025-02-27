import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/articles/all',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

