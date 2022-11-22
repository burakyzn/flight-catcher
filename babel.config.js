module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            constants: "./src/constants",
            contexts: "./src/contexts",
            mocks: "./src/mocks",
            navigations: "./src/navigations",
            screens: "./src/screens",
          },
          extensions: [".js", ".jsx"],
        },
      ],
    ],
  };
};
