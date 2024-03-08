import { defineConfig } from 'cypress';
require('dotenv').config()

export default defineConfig({
  e2e: {
    baseUrl: 'https://uitestingplayground.com',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      stage:'https://stage.pasv.us',
      stage2: 'https://stage.pasv.us',
      prod:'https://stage.pasv.us/course',
      info:'Hello World!',
      base:'https://play1.automationcamp.ir/expected_conditions.html',
      demoQA: 'https://demoqa.com',
      localCoding: 'https://stage.coding.pasv.us',
      //email: 'alfiyachaikalak@gmail.com',
      //password: 'abc1234321CBA',
      herokuapp: 'https://the-internet.herokuapp.com',
    }
  },
  viewportWidth: 1200,
  viewportHeight: 1400,

  retries: {
    runMode: 2,
    openMode: 2,
  },
  defaultCommandTimeout: 16000,
});
