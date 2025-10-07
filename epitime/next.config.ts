import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com", // autorise le domaine flaticon
        port: "",
        pathname: "/**", // autorise toutes les images
      },
    ],
  },
};

export default nextConfig;
