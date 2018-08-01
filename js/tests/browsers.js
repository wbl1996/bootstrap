/* eslint-env node */
/* eslint-disable camelcase */

const browsers = {
  safariMac: {
    os: 'OS X',
    os_version: 'High Sierra',
    browserName: 'Safari',
    browser_version: '11.1'
  },
  chrome67Mac: {
    os: 'OS X',
    os_version: 'High Sierra',
    browserName : 'Chrome',
    browser_version : '67.0'
  },
  firefox61Mac: {
    os: 'OS X',
    os_version: 'High Sierra',
    browserName: 'Firefox',
    browser_version: '61.0'
  },
  edgeWin10: {
    os: 'Windows',
    os_version: '10',
    browserName: 'Edge',
    browser_version: '17.0'
  },
  ie11Win10: {
    os: 'Windows',
    os_version: '10',
    browserName: 'IE',
    browser_version: '11.0'
  },
  chromeWin10: {
    os: 'Windows',
    os_version: '10',
    browserName: 'Chrome',
    browser_version: '67.0'
  },
  firefoxWin10: {
    os: 'Windows',
    os_version: '10',
    browserName: 'Firefox',
    browser_version: '61.0'
  },
  ie10Win8: {
    os: 'Windows',
    os_version: '8',
    browserName: 'IE',
    browser_version: '10.0'
  },
  iphoneXIos: {
    os: 'ios',
    os_version: '11.0',
    device: 'iPhone X'
  },
  gs9Android: {
    os: 'android',
    os_version: '8.0',
    device: 'Galaxy S9 Plus'
  }
}

const browsersKeys = Object.keys(browsers)

module.exports = {
  browsers,
  browsersKeys
}
