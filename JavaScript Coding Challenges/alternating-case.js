// jshint esversion:6

/**
 * hello WORLD => HELLO world
 * HELLO world => hello WORLD
 * hELlO WoRlD => HelLo wOrLd
 */

String.prototype.toAlternatingCase = function () {
  return this.split("").map(changeCase).join("");
};

function changeCase(char) {
  return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
}

console.log("hELlO WoRlD".toAlternatingCase());
