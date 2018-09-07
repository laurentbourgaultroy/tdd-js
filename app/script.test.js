(function () {
  "use strict";

  let assert = chai.assert;

  describe("App", function () {
    let runner;
    let input;
    let output;

    beforeEach(function () {
      runner = document.createElement("button");
      document.body.appendChild(runner);

      input = document.createElement("input");
      input.type = "text";
      document.body.appendChild(input);

      output = document.createElement("p");
      document.body.appendChild(output);

      tdd.run(input, output, runner);
    });

    afterEach(function () {
      for (let child of [input, output, runner]) {
        document.body.removeChild(child);
      }
    });

    it("write to the output when the runner is clicked", function () {

      runner.click();

      assert.include(
        output.innerText,
        "Nombre de mots:",
        "Output is updated");
    });

    it("display the word count", function () {
      input.value = "one two";
      runner.click();

      assert.include(
        output.innerText,
        "2",
        "Word count is displayed");
    });
  });

  describe("WordCount", function () {
    it("can count simple word", function () {
      assert.strictEqual(tdd.wordCount("one two three"), 3, "three simple word");
    });

    it("can count word with space", function () {
      assert.strictEqual(tdd.wordCount("one     two"), 2, "weird whitespace");
    });
  });
}());