(function () {
  "use strict";

  let tdd = window.tdd = {};

  tdd.run = function (input, output, runner) {
    runner.addEventListener('click', () => {
      output.innerText = "Nombre de mots: " + tdd.wordCount(input.value) ;
    });
  };

  tdd.wordCount = function (text) {
    let words = text.split(" ");

    let count = 0;

    for (let word of words) {
      if (word.trim() !== "") {
        count += 1;
      }
    }

    return count;
  };
}());