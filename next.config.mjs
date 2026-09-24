/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/cornerstone-prototype',
  assetPrefix: '/cornerstone-prototype',
};

export default nextConfig;
