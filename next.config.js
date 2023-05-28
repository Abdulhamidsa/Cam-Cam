/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["res.cloudinary.com", "media.graphassets.com", "camcamcopenhagen.com"],
    deviceSizes: [320, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60,
    formats: ["image/webp"],
  },
  webpack: (config) => {
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
