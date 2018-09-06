(function (){
  "use strict";

  let fs = require('fs');
  let eslint = require('eslint');

  exports.lintFiles = function (files, rules) {
    console.log("Linting " + files.length + " js files");
    let allErrors = runLinterOn(files, rules);

    allErrors.forEach(function (error) {
      console.log("");
      console.log(error);
    });
    console.log("");

    return allErrors.length === 0;
  };

  function runLinterOn(files, rules) {
    let linter = new eslint.Linter();
    let allErrors = [];

    files.forEach(filePath => {
      let fileErrors = lintFile(linter, rules, filePath);

      if (fileErrors.length === 0) {
        process.stdout.write('.');
      } else {
        process.stdout.write('F');
      }


      fileErrors.forEach(function (error) {
        allErrors.push(error);
      });
    });

    console.log("");

    return allErrors;
  }

  function lintFile(linter, rules, filePath) {
    let source = fs.readFileSync(filePath, {
      encoding: "utf8"
    });

    let fileErrors = linter.verify(source, rules);

    return fileErrors.map(result => errorMessage(filePath, source, result));
  }

  function errorMessage(filePath, source, result) {
    let code = eslint.SourceCode.splitLines(source)[result.line - 1].trim();

    return `${filePath}:${result.line} ${code}\n` +
      `  ${result.ruleId}: ${result.message}`;

  }
}());
