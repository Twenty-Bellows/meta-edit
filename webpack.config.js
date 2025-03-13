const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

defaultConfig[0] = {
  ...defaultConfig[0],
  ...{
    entry: {
      editor: './src/editor.js',
    },
  }
}

module.exports = defaultConfig