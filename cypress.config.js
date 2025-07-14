const { defineConfig } = require("cypress");

// importando a biblioteca cypress-cucumber
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/step_definitions/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())  
    }
  },
});
