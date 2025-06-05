// 10814 나이순 정렬

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

input.shift();

const output = input
  .sort((a, b) => a.split(' ')[0] - b.split(' ')[0])
  .join('\n');

console.log(output);
