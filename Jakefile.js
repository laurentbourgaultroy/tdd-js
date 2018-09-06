(function () {
  "use strict";

  let lint = require('./build/lint');

  desc("Build everything");
  task("default", ["lint"], () => {
    console.log("OK");
  });

  desc("Lint JavaScript");
  task("lint", () => {
    let files = new jake.FileList();
    files.include('./**/*.js');
    files.exclude('./node_modules/*');

    let eslintRules = esLintConfig();

    if (!lint.lintFiles(files.toArray(), eslintRules)) {
      fail("Linting error");
    }
  });

  function esLintConfig() {
    return {
      "parserOptions": {
        "ecmaVersion": 2017
      },

      "env": {
        "node": true,
        "browser": true,
        "mocha": true
      },

      "globals": {
        "jake": false,
        "desc": false,
        "task": false,
        "complete": false,
        "fail": false,
        "chai": false,
        "lilgame": false
      },

      "rules": {
        // "Possible Errors" (according to ESLint docs)
        "no-async-promise-executor": 'error',
        "getter-return": 'error',
        "no-compare-neg-zero": 'error',
        "no-cond-assign": 'error',
        "no-constant-condition": 'error',
        "no-control-regex": 'error',
        "no-dupe-args": 'error',
        "no-dupe-keys": 'error',
        "no-duplicate-case": 'error',
        "no-empty-character-class": 'error',
        "no-ex-assign": 'error',
        "no-extra-boolean-cast": 'error',
        "no-extra-semi": 'error',
        "no-func-assign": 'error',
        "no-inner-declarations": 'error',
        "no-invalid-regexp": 'error',
        "no-irregular-whitespace": 'error',
        "no-obj-calls": 'error',
        "no-sparse-arrays": 'error',
        "no-template-curly-in-string": 'error',
        "no-unexpected-multiline": 'error',
        "no-unreachable": 'error',
        "no-unsafe-finally": 'error',
        "no-unsafe-negation": 'error',
        "use-isnan": 'error',
        "valid-typeof": 'error',
        // "Best Practices"
        "array-callback-return": 'error',
        "complexity": 'error',
        "dot-location": ["error", "property"],
        "curly": ["error", "multi-line"],
        "eqeqeq": 'error',
        "no-caller": 'error',
        "no-case-declarations": 'error',
        "no-empty-pattern": 'error',
        "no-eq-null": 'error',
        "no-eval": 'error',
        "no-extend-native": 'error',
        "no-fallthrough": 'error',
        "no-floating-decimal": 'error',
        "no-implicit-coercion": 'error',
        "no-global-assign": 'error',
        "no-implicit-globals": 'error',
        "no-implied-eval": 'error',
        "no-iterator": 'error',
        "no-lone-blocks": 'error',
        "no-loop-func": 'error',
        "no-new": 'error',
        "no-new-func": 'error',
        "no-new-wrappers": 'error',
        "no-octal": 'error',
        "no-octal-escape": 'error',
        "no-proto": 'error',
        "no-redeclare": 'error',
        "no-restricted-properties": 'error',
        "no-return-assign": 'error',
        "no-return-await": 'error',
        "no-script-url": 'error',
        "no-self-assign": 'error',
        "no-self-compare": 'error',
        "no-throw-literal": 'error',
        "no-useless-return": 'error',
        "no-useless-escape": 'error',
        "no-with": 'error',
        "prefer-promise-reject-errors": 'error',
        "wrap-iife": 'error',
        "radix": 'error',
        "require-await": 'error',
        // "Strict Mode"
        "strict": ['error', "function"],
        // "Variables"
        "no-delete-var": 'error',
        "no-label-var": 'error',
        "no-undef": 'error',
        "no-undef-init": 'error',
        "no-use-before-define": ['error', {
          "functions": false,
          "classes": true,
          "variables": false
        }],
        // "Stylistic Issues"
        "new-cap": 'error',
        "no-bitwise": 'error',
        "no-mixed-spaces-and-tabs": 'error',
        "semi": ['error', "always"],
        // "ECMAScript 6"
        "constructor-super": 'error',
        "no-class-assign": 'error',
        "no-confusing-arrow": 'error',
        "no-const-assign": 'error',
        "no-dupe-class-members": 'error',
        "no-duplicate-imports": 'error',
        "no-new-symbol": 'error',
        "no-this-before-super": 'error',
        "require-yield": 'error',
        "no-var": 'error'
      }
    };
  }
}());
