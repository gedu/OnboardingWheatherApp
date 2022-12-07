module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          src: './src',
          '@assets': './assets',
          '@services': './src/services',
          '@components': './src/components',
        },
      },
    ],
  ],
};
