/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["res.cloudinary.com", "media.graphassets.com", "camcamcopenhagen.com"],
    deviceSizes: [320, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60,
    formats: ["image/webp"],
  },
  webpack: (config, { isServer }) => {
    // Only perform optimization for client-side bundles
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          modern: {
            test: /\.js$/,
            name: "modern",
            chunks: "all",
            priority: 10,
            minSize: 0,
            minChunks: 2,
            reuseExistingChunk: true,
          },
          legacy: {
            test: /\.js$/,
            name: "legacy",
            chunks: "all",
            priority: 5,
            minSize: 0,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
      };
    }

    // Add additional webpack rules for file types
    config.module.rules.push(
      {
        test: /\.mp4$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
};
