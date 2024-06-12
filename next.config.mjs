/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERRORS,
  },
};

export default nextConfig;
