import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Production hygiene; does not affect page output. */
  poweredByHeader: false
};

export default nextConfig;
