import { defineConfig } from 'cypress';
require('dotenv').config()

const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path");

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'LecturePASV',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://uitestingplayground.com',
    
    setupNodeEvents(on, config) {
      //reporter = 'cypress-mochawesome-reporter'
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      //reading excel document from fixture
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
    env:{
      stage:'https://stage.pasv.us',
      stage2: 'https://stage.pasv.us',
      prod:'https://stage.pasv.us/course',
      info:'Hello World!',
      base:'https://play1.automationcamp.ir/expected_conditions.html',
      demoQA: 'https://demoqa.com',
      localCoding: 'https://stage.coding.pasv.us',
      email: 'alfiyachaikalak@gmail.com',
      password: 'abc1234321CBA',
      herokuapp: 'https://the-internet.herokuapp.com',
      iframeHomework: 'https://play1.automationcamp.ir'
    }
  },

  viewportWidth: 1200,
  viewportHeight: 1400,

  retries: {
    runMode: 2,
    openMode: 2,
  },
  video: true,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 16000,
});
