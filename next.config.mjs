import { imageHosts } from './image-hosts.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: imageHosts,
    unoptimized: true,
  },
};

export default nextConfig;
