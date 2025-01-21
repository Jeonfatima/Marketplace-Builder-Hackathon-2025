/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Ensures React strict mode is enabled
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
        },
      ],
    },
    experimental: {
      appDir: true, // Enable the `app/` directory (for Next.js 13+ features)
    },
  };
  
  export default nextConfig;
  