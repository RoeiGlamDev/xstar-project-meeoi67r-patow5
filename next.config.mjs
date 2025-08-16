import { withPlaiceholder } from '@plaiceholder/next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: []
},
  experimental: {
    optimizeCss: true
},
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/about-us', // Custom about us page
      },
      {
        source: '/products',
        destination: '/shop', // Custom shop page
      },
    ];
  }
};

export default withPlaiceholder(nextConfig, {
  placeholder: true,
  quality: 75,
  size: 800
});