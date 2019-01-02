
const getAppPath = require('./helpers').helpers.getAppPath
const commonConfig = require('./common.conf')

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;
const capabilities = {
  android: {
    waitforTimeout,
    commandTimeout,
    platformName: "Android",
    unicodeKeyboard: true,
    newCommandTimeout: 30 * 60000,
    resetKeyboard: true,
    noReset: true,
    platformVersion: "8.0",
    automationName: "UiAutomator2",
    deviceName: "Google Nexus 5X",
    app: getAppPath(true),
  },
  ios: {
    waitforTimeout,
    commandTimeout,
    platformName: 'iOS',
    unicodeKeyboard: true,
    newCommandTimeout: 30 * 60000,
    resetKeyboard: true,
    noReset: true,
    nativeInstrumentsLib: true,
    isolateSimDevice: true,
    platformVersion: "12.1",
    deviceName: "iPhone 6",
    app: getAppPath()
  }
}
const getCapability = () => {
  if (process.env.ANDROID) {
    return capabilities.android
  } else if (process.env.IOS) {
    return capabilities.ios
  }
  return [capabilities.ios, capabilities.android]
}
exports.config = Object.assign(commonConfig.config, {
  capabilities: getCapability(),
  desiredCapabilities: getCapability(),
  platformName: process.env.ANDROID ? "android" : "iOS",
  services: ['appium'],
  maxInstances: 2,
  appium: {
    waitStartTime: 6000,
    args: {
      waitforTimeout,
      port: 4723,
      logFileName: 'appium.log',
      commandTimeout: 30000,
      address: '127.0.0.1',
      sessionOverride: true,
      noReset: true,
      autoAcceptAlerts: true,
      debugLogSpacing: false,
      appiumVersion: '1.10.0', // Appium module version
      autoGrantPermissions: true,
    }
  },
  port: 4723,
  baseUrl: 'http://127.0.0.1',

})
