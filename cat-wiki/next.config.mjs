/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.thecatapi.com',
        port: '',
      }
    ]
  }
};

export default nextConfig;