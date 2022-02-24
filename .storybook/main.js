const path = require('path')

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.resolve(__dirname, '../public/assets'),
    }

    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook/addon-next',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
