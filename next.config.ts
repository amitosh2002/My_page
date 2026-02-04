import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
