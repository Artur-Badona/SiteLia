import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  // you can add more config options here later if needed
};

export default nextConfig;
