const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout:100000,
  viewportHeight:1080,
  viewportWidth:1920,
  pageLoadTimeout:200000,
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php",
    video:false,
    specPattern:"cypress/e2e/**/*.spec.js",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
