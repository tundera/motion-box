const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

// Adapted from https://github.com/UnlyEd/next-right-now/blob/e5aba8eaf02918d9506008ee1f11c38954fedc86/.storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
        backgrounds: true,
        controls: true,
        docs: true,
        viewport: true,
        toolbars: true,
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    'storybook-addon-performance/register',
    'storybook-mobile',
    'storybook-addon-designs',
  ],
  core: {
    builder: 'webpack5',
  },
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    const { mode: environment, plugins, module } = config;

    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
          module: false,
          crypto: false,
        },
        alias: {
          ...config.resolve.alias,

          /**
           * Map Emotion 10 libraries to Emotion 11 libraries.
           *
           * Otherwise Storybook fails to compile with "Module not found: Error: Can't resolve '@emotion/styled/base'", etc.
           * It wasn't necessary to do this until we imported React component using "@emotion/styled".
           * This issue is probably caused because Storybook uses Emotion 10 while we have Emotion 11 used by the Next.js app.
           *
           * @see https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
           */
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
