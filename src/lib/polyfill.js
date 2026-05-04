'use strict';

const { cleaningUp } = require('./globals');

function applyPolyfills() {
  if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function(search, replacement) {
      return this.split(search).join(replacement);
    };
  }
  if (!Object.fromEntries) {
    Object.fromEntries = function(entries) {
      const obj = {};
      for (const [k, v] of entries) obj[k] = v;
      return obj;
    };
  }

  cleaningUp();
}

module.exports = { applyPolyfills };