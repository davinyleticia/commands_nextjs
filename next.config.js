module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://command.views.page/:path*',
          },
        ]
      },
  };