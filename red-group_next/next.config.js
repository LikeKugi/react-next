/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {

      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '4000',
          pathname: '/images/**',
        },
      ],

  },
  env: {
    API_URL: 'http://localhost:4000',
  },
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: `http://localhost:4000/images/:path*.jpg`
      }
    ]
  }
}

module.exports = nextConfig
