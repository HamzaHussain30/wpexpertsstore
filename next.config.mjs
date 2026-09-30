/** @type {import('next').NextConfig} */
const nextConfig = {
  // The interactions run once from an external script that fills placeholder
  // nodes; disable double-invocation so listeners/intervals aren't bound twice.
  reactStrictMode: false,
};

export default nextConfig;
