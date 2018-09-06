(function () {
    "use strict";

    let karma = require('karma');

    let configFile = __dirname + '/karma.conf.js';

    exports.runServer = function () {
        let server = new karma.Server({
            configFile: configFile
        }, (exitCode) => {
            console.log('Karma exited with code ' + exitCode);
        });

        server.start();
    };

    exports.execute = function (callback) {
        console.log("Running browser tests");
        karma.runner.run({
            configFile: configFile
        }, (exitcode) => {
            if (exitcode === 0) return callback();
            else return callback(new Error("Unit test failed. exit code " + exitcode));
        });
    };
}());