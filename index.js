/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-pca-predict',
  included(app) {
    if (!process.env.EMBER_CLI_FASTBOOT) {
      this._super.included(app);
    }
  },
  isDevelopingAddon() {
    return true;
  }
};
