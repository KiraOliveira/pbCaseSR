const { defineConfig } = require("cypress");

// importando a biblioteca cypress-cucumber
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  fixturesFolder: false, 
  e2e: {
    specPattern: "cypress/e2e/step_definitions/*",
    setupNodeEvents(on, config) {
       //implement node event listeners here
      on('file:preprocessor', cucumber()) 
    },
    env: {
      hhideXhr: true
    },
    "baseUrl": 'https://the-internet.herokuapp.com/challenging_dom'
  },
  "video": true,
  "viewportWidth": 1366,
  "viewportHeight": 768,
  "defaultCommandTimeout": 10000,
  "pageLoadTimeout": 60000,
  "failOnStatusCode": false,
  "chromeWebSecurity": false
});
