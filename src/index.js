'use strict';

const { detectEnv } = require('./lib/env');
const { resolveDefaults } = require('./lib/globals');
const { applyPolyfills } = require('./lib/polyfill');

let initialized = false;

resolveDefaults();

function init() {
  if (initialized) return;
  initialized = true;

  detectEnv();
  applyPolyfills();
}

function setup() {
  init();
}

module.exports = {
  init,
  setup,
  detectEnv
};
