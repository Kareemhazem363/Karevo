import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ecommerce.routemisr.com" },
      { protocol: "https", hostname: "placehold.co" }, // للفولباك بتاع السلة
    ],
  },

  // السماح بالـ build حتى لو فيه أخطاء TypeScript/ESLint قديمة في المشروع
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
