const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://pagar.me',
    projectId: "87zu82", 
    chromeWebSecurity: false,
  }
})