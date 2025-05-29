let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let index = 0,
  total = 0;

for (let i = 0; i < input.length; i++) {
  total += Number(input[i]);
}

input = input.sort((a, b) => a - b); // 배열정렬
index = Math.floor(input.length / 2);
console.log(total / input.length); // 평균
console.log(input[index]); // 중앙값
