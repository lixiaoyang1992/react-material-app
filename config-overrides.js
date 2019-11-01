const { override, addLessLoader } = require('customize-cra');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const addPlugin = plugin => config => {
  config.plugins.push(plugin);
  return config;
};

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
  }),
  addPlugin(new ProgressBarPlugin()),
);
