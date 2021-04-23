exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'access_key',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'username',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'Azure test',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID || 'app_url',
    'browserstack.debug': true
  }],
  
  reporters: ["browserstack"],
  reporterOptions: {
    browserstack: {
      outputDir: "./"
    }
  },

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};
