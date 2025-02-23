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
>>>>>>> 349c3ae9dab1170f0d14aa25a64a5b3e0d335261
  },
});
