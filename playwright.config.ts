import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // projects: [
  //   {
  //     name: "chrome",
  //     use: {
  //       ...devices["Desktop Chrome"]
  //     }
  //   },
  //   {
  //     name: "chrome",
  //     use: {
  //       ...devices["Desktop Firefox"]
  //     }
  //   }
  // ],
  testMatch: ["pomTests/loginTests.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,

    screenshot: "on",
    video: "retain-on-failure",
    launchOptions: {
      slowMo: 1000
    },
    trace: 'retain-on-failure' //debugging option
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "always"
  }]]
};

export default config;
