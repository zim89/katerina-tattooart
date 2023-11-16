/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_SUPABASE_URL.replace('https://', ''),
        port: '',
        pathname: '/storage/v1/object/public/gallery-images/*',
      },
      {
        protocol: 'https',
        hostname: 'cdn-api.jetadmin.app',
        port: '',
        pathname: '/media/static_files/projects/tattooart/*',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        port: '',
        pathname: '/avatar/*',
      },
    ],
  },
};

module.exports = nextConfig;
