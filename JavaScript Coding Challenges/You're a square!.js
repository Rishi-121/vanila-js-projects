// jshint esversion:7

var isSquare = function (n) {
  if (n < 0) return false;
  return Math.floor(Math.sqrt(n)) ** 2 === n ? true : false;

  // return Math.sqrt(n) % 1 === 0 ? true : false;
};

console.log(isSquare(70));
