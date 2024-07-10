import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.1crmcloud.com',
    specPattern: 'cypress/e2e/**/*.{spec,cy}.{js,ts}',
  },
});
