/* eslint-env node */
'use strict';

var filterInitializers = require('fastboot-filter-initializers');

module.exports = {
  name: 'ember-pca-predict',
  preconcatTree: function(tree) {
    return filterInitializers(tree, this.app.name);
  },
  isDevelopingAddon() {
    return true;
  }
};
