/* eslint-env node */
/* eslint no-process-env: 0 */
const {
  browsers,
  browsersKeys
} = require('./browsers')

module.exports = (config) => {
  config.set({
    browserStack: {
      username: process.env.BROWSER_STACK_USERNAME,
      accessKey: process.env.BROWSER_STACK_ACCESS_KEY
    },
    customLaunchers: browsers,
    browsers: browsersKeys,
    basePath: '../..',
    frameworks: ['qunit', 'sinon', 'karma-browserstack-launcher'],
    plugins: [
      'karma-qunit',
      'karma-sinon'
    ],
    // list of files / patterns to load in the browser
    files: [
      'site/docs/4.1/assets/js/vendor/jquery-slim.min.js',
      'site/docs/4.1/assets/js/vendor/popper.min.js',
      'js/coverage/dist/util.js',
      'js/coverage/dist/tooltip.js',
      'js/coverage/dist/!(util|index|tooltip).js', // include all of our js/dist files except util.js, index.js and tooltip.js
      'js/tests/unit/*.js'
    ],
    reporters: ['dots', 'BrowserStack'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR || config.LOG_WARN,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    client: {
      qunit: {
        showUI: true
      }
    }
  })
}
