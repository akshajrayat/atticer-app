import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  // If repository name is "<username>.github.io", basePath should be ""
  if (repo && !repo.endsWith(".github.io")) {
    basePath = `/${repo}`;
  }
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
