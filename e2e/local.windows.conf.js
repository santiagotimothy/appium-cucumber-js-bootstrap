
const getAppPath = require('./helpers').helpers.getAppPath
const commonConfig = require('./common.conf')

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;
const capabilities = {
  android: {
    waitforTimeout,
    commandTimeout,
    browserName: 'Android',
    platformName: "Android",
    unicodeKeyboard: true,
    newCommandTimeout: 30 * 60000,
    resetKeyboard: true,
    noReset: true,
    platformVersion: "8.0",
    automationName: "UiAutomator2",
    deviceName: "Google Pixel",
    app: getAppPath(true)
  }
}
const getCapability = () => {
  if (process.env.ANDROID) {
    return capabilities.android
  }
  return [capabilities.android]
}
exports.config = Object.assign(commonConfig.config, {
  capabilities: getCapability(),
  services: ['appium'],
  reporters: ['allure'],
  maxInstances: 2,
  appium: {
    command: 'appium.cmd',
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
      appiumVersion: '1.8.1', // Appium module version
      autoGrantPermissions: true,
    }
  },
  port: 4723,
  baseUrl: 'http://127.0.0.1',

})
