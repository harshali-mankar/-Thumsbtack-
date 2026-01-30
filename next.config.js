const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/-Thumsbtack-' : '',
  assetPrefix: isProd ? '/-Thumsbtack-/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;