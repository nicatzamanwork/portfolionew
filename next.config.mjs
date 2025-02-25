const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development", // Disable strict mode in production
  webpack(config, { isServer }) {
    if (process.env.NODE_ENV === "production") {
      config.ignoreWarnings = [/failed to load/]; // Customize ignored warnings
    }
    return config;
  },
};

export default nextConfig;
