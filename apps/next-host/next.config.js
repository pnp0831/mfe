const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = 'chunks';

  return {
    'next-remote': `next-remote@${process.env.NEXT_PUBLIC_NEXT_REMOTE_URL}/_next/static/${location}/remoteEntry.js`,
    'next-host': `next-host@${process.env.NEXT_PUBLIC_NEXT_HOST_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

/**
 * @type {import('next').NextConfig}
 **/

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: { appDir: true },
  reactStrictMode: false,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  env: {
    NEXT_PRIVATE_LOCAL_WEBPACK: 'true',
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, options) {
    const { isServer } = options;

    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'next-host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: remotes(isServer),
          extraOptions: {
            debug: true,
            automaticAsyncBoundary: true,
          },
          exposes: {},
          shared: ['react', 'react-dom', 'next'],
        })
      );
    }

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
