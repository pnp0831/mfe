/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/react-host-vite',

  server: {
    port: 4204,
    host: 'localhost',
    // proxy: {
    //   '/_next': String(process.env.NEXT_PUBLIC_NEXT_REMOTE_URL),
    // },
  },
  preview: {
    port: 4204,
    host: 'localhost',
    // proxy: {
    //   '/_next': String(process.env.NEXT_PUBLIC_NEXT_REMOTE_URL),
    // },
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    federation({
      name: 'react-host-vite',
      filename: 'remoteEntry.js',
      exposes: {},
      remotes: {
        'next-remote': {
          external: `${process.env.NEXT_PUBLIC_NEXT_REMOTE_URL}/_next/static/chunks/remoteEntry.js`,
          format: 'var',
          from: 'webpack',
          externalType: 'url',
        },
      },
      shared: {},
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/react-remote-vite',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/react-remote-vite',
      provider: 'v8',
    },
  },
});
