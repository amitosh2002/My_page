import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export
  output: "export",
  // Keep Turbopack's module resolution scoped to this app; the parent folder
  // also contains a lockfile and can otherwise be inferred as the workspace root.
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
