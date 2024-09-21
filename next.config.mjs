/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'ibb.co',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;
  