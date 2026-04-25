import path from "path";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  experimental: {
    appDir: true
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")]
  }
};

export default nextConfig;
