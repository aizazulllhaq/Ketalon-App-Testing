const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: "Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    timestamp: "yyyy-mm-dd-HH-MM-ss",
  },

  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    screenshotOnRunFailure: true,
  },

  retries: {
    runMode: 2, // Retries failed tests twice when running in 'cypress run'
    openMode: 1, // Retries failed tests once when running in 'cypress open'
  },

  videosFolder: "cypress/videos", // Directory to save videos
  screenshotsFolder: "cypress/screenshots", // Directory to save screenshots
  env: {
    BASIC_AUTH_USER: "John Doe",
    BASIC_AUTH_PASS: "ThisIsNotAPassword",
  },
});
