/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["res.cloudinary.com", "media.graphassets.com", "camcamcopenhagen.com"],
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
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Handles CSS imports
          "sass-loader", // Compiles SCSS to CSS
        ],
      },
    ],
  },
};
