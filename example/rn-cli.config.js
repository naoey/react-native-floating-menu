const blacklist = require('metro-config/src/defaults/blacklist');

// blacklist is a function that takes an array of regexes and combines
// them with the default blacklist to return a single regex.

module.exports = {
  resolver: {
    blacklistRE: blacklist([/react\-native\-floating\-menu\/example\/node_modules\/react\-native\-floating\-menu\/example\/node_modules\/react\-native\-floating\-menu\/example\/node_modules\/react\-native\/*/])
  }
};
