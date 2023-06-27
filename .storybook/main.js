module.exports = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ]

    return config;
  }
};