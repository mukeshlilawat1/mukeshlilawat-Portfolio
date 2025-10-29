/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-activity-graph.vercel.app",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
    ],
  },

  eslint: {
    // 🚀 Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 🚀 Ignore type errors during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
