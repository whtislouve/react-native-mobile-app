module.exports = function (api) {
  api.cache(true)
 
  return {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      production: {
        plugins: [
          ["@babel/plugin-proposal-decorators", {legacy: true}],
          [
            require.resolve('babel-plugin-module-resolver'),
            {
              root: ['.'],
              alias: {
                app: './src',
                assets: './assets'
              },
            },
          ],
          'transform-remove-console',
        ],   //removing consoles.log from app during release (production) versions
      },
      development: {
        plugins: [
          ["@babel/plugin-proposal-decorators", {legacy: true}],
          [
            require.resolve('babel-plugin-module-resolver'),
            {
              root: ['.'],
              alias: {
                app: './src',
                assets: './assets'
              },
            },
          ],
        ],
      }
    },
  };
};