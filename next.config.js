/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aquariumfishonline.com.au',
      },
      {
        protocol: 'https',
        hostname: 'cichlidshire.com',
      },
      // Add more domains as needed
    ],
  },
}

module.exports = nextConfig 