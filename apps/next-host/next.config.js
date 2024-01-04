const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    // nextRemote: `nextRemote@${process.env.NEXT_PUBLIC_NEXT_REMOTE_URL}/_next/static/${location}/remoteEntry.js`,
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
  // webpack(config, options) {
  //   const { isServer } = options;

  //   if (!isServer) {
  //     config.plugins.push(
  //       new NextFederationPlugin({
  //         name: 'host',
  //         filename: 'static/chunks/remoteEntry.js',
  //         remotes: remotes(isServer),
  //         shared: ['react', 'react-dom'],
  //       })
  //     );
  //   }

  //   return config;
  // },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
