/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["res.cloudinary.com"], // Add your domain(s) here
  },
  webpack: (config) => {
    // Add your modifications to the webpack configuration here
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
          esModule: false,
        },
      },
    });

    // Return the modified configuration
    return config;
  },
};
