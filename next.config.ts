import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export mode
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
