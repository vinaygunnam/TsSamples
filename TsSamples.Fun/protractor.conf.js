exports.config = {
    specs: ['tests/e2e/**/*Descriptor.js', 'tests/e2e/**/*.spec.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    baseUrl: 'http://localhost:16725',
    framework: 'jasmine2'
};