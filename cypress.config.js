const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
<<<<<<< HEAD
    setupNodeEvents(on, config) {},
    baseUrl: "https://magento.softwaretestingboard.com/",
    defaultCommandTimeout: 60000,
=======
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://magento.softwaretestingboard.com/'
>>>>>>> d4d8816 (upload checkout test script)
  },
});
