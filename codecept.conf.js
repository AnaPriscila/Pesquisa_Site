exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.google.com.br',
      browser: 'chrome'
    },
    Mochawesome:{
    uniqueScreenshotNames: true
    }
  },  
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Pesquisa_Site',
  plugins:{
    wdio:{
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  mocha: {
    reporterOptions: {
        mochaFile: "output/result.xml"
    }
  },
  mocha: {
    reporterOptions: {
      Mochawesome: {
        stdout: './output/console.log',
        options: {
          reportDir: './output',
          reportFilename: 'report',
          reportPageTitle: 'Pesquisa - Acceptance Tests',
          reportTitle: 'Pesquisa - Acceptance Tests',
          autoOpen: true,
          enabledCode: true,
          inlineAssets: true,
          overwrite: true,
          quiet: true
        } 
      }
    }
  }
}