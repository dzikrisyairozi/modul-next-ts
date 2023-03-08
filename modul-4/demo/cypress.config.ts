import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  chromeWebSecurity: false,
  modifyObstructiveCode: false,
  waitForAnimations: true,

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.ts")(on, config);
    },
    baseUrl: "http://localhost:3000",
    excludeSpecPattern: ["*.helper.*", "*.mock.*", "*.test-config.*"],
    specPattern: "cypress/e2e/**/*.spec.{ts,tsx}",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
