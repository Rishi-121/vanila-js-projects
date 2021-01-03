// jshint esversion:6

// Return masked string

function maskify(cc) {
  return cc
    .split("")
    .map((currentValue, index) => (index < cc.length - 4 ? "#" : currentValue))
    .join("");
}

console.log(maskify("4556364607935616"));
