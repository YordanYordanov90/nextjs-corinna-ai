import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
      },
      {
        protocol: "https",
        hostname: "wordpress-1364691-5025207.cloudwaysapps.com",
      },
    ],
  },
};

export default nextConfig;
