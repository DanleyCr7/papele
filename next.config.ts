import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: isGitHubPages ? "export" : undefined,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  trailingSlash: true,
  images: {
    unoptimized: isGitHubPages,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
