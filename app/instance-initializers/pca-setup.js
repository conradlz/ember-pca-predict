import Ember from 'ember';
import config from '../config/environment';

const {
  merge,
  set
} = Ember;

const DEFAULT_CONFIG = {
  enabled: true
};

export function initialize(appInstance) {
  let emberPcaConfig = merge(DEFAULT_CONFIG, config['ember-pca-predict']);
  let emberPcaService = appInstance.lookup('service:ember-pca');

  Object.keys(emberPcaConfig).forEach((key) => {
    set(emberPcaService, key, emberPcaConfig[key]);
  });
  if (window && document) {
    (function(n, t, i, r) {
        var u, f;
        n[i] = n[i] || {}, n[i].initial = {
            accountCode: emberPcaConfig.accountCode,
            host: emberPcaConfig.host
        }, n[i].on = n[i].on || function() {
            (n[i].onq = n[i].onq || []).push(arguments)
        }, u = t.createElement("script"), u.async = !0, u.src = r, f = t.getElementsByTagName("script")[0], f.parentNode.insertBefore(u, f)
    })(window, document, "pca", `//${emberPcaConfig.host}/js/sensor.js`)
  }
}

export default {
  name: 'pca-setup',
  initialize
};
