module.exports = {
  experimental: {
    middleware: true, // Enable experimental middleware feature if needed
  },
  // Optional: specify path matching rules
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*", // Match API paths
        destination: "/api/auth/:path*", // Allow these paths to go through
      },
    ];
  },
};
