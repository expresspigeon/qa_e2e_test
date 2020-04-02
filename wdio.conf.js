let helpers = require('./test/helpers/helpers')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

exports.config = {
    path: '/',
    runner: 'local',
    specs: [
        './test/specs/**',
        './test/specs/elements/*'
    ],
    // Patterns to exclude.
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://expresspigeontest.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000 * 5,
        compilers: ['js:@babel/register'],
    },
    before: function() {
        const chai    = require('chai');
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
    beforeTest: function () {
        browser.maximizeWindow();
    },
    afterTest: function(test) {
        if (test.error !== undefined) {
            browser.saveScreenshot('./screenshots/'+Date.now()+'.png');
        }
    },
    onComplete: async function () {
        // var res;
        // res = await helpers.getAdminSession();
        // res.should.have.status(302);
        // var resCookie = res.headers['set-cookie'].pop().split(';')[0];
        // res = await helpers.accountReset(resCookie)
        // res.should.have.status(200);
        // var res1
        // do {
        //     res1 = await helpers.accountResetStatus(resCookie)
        //     res.should.have.status(200);
        // }
        // while (res1.body.started == true);
        // console.log('Account reset')
    },
}
