/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-skeleton',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      // We allow 'unsafe-eval' because Chart.js is a piece of shit and I can't
      // figure out how to fix it (see
      // https://github.com/nnnick/Chart.js/issues/281). If going to
      // production, we should not allow 'unsafe-eval' and find a chart library
      // that works.
      'script-src': "'self' 'unsafe-eval' ",
      'font-src': "'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com ",
      'connect-src': "'self' http://127.0.0.1:5000 ",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com ",
      'media-src': "'self'"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
