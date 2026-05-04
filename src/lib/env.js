'use strict';

function detectEnv() {
  if (typeof process !== 'undefined' && process.versions?.node) {
    process.env.TS_ADDONS_ENV = 'node';
  } else if (typeof window !== 'undefined') {
    process.env.TS_ADDONS_ENV = 'browser';
  }
}

module.exports = { detectEnv };