// jshint esversion:6

function solution(number) {
  if (number < 0) return 0;

  let sum = 0;

  for (let i = 0; i < number; i++) {
    sum += checkNum(i);
  }
  return sum;
}

function checkNum(num) {
  return num % 3 === 0 || num % 5 === 0 || (num % 3 === 0 && num % 5 === 0) ? num : 0;
}

console.log(solution(10));