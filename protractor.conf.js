'use strict';

let config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    seleniumAddress: 'http://localhost:4444/wd/hub',

    chromeDriver: './selenium/chromedriver',

    capabilities: {
        'browserName': (process.env.TEST_BROWSER_NAME || 'chrome'),
        'version': (process.env.TEST_BROWSER_VERSION || 'ANY'),
        newCommandTimeout: '10000',
        autoAcceptAlerts: 'true',
    },

    baseUrl: 'http://localhost:4200/',

    specs: ['./e2e/features/TestFeatureFile.feature'],

// relevant cucumber command line options
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        require: ['./e2e/stepDefinitions/{,**/}*.steps.ts', './e2e/support/{,**/}*.po.ts'],
        format:
            ['json:e2e/result/test_result.json', 'progress'],
        tags:
            ["~@Ignore", "~@Manual"]
    },


    // useAllAngular2AppRoots: true,

    onPrepare:

        function () {
            let chai = require('chai'),
                chaiAsPromised = require('chai-as-promised');

            chai.use(chaiAsPromised);

            global.expect = chai.expect;
            global.browser.ignoreSynchronization = true;
            global.browser.manage().window().maximize();

        }

};

exports.config = config;
