/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
      return [
        {
          source: '/products/whitefox-tracksuit',
          destination: '/',
          permanent: true,  // Redirecionamento 301
        },
        {
          source: '/products/tracksuit-whitefox',
          destination: '/',
          permanent: true,  // Redirecionamento 301
        },
      ]
    },
};

module.exports = nextConfig;
