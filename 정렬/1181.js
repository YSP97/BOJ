// 1181 단어 정렬
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

const arr = [...new Set(input)];

const output = arr
  .sort((el1, el2) => {
    if (el1.length === el2.length) {
      return el1.localeCompare(el2);
    }
    return el1.length - el2.length;
  })
  .join('\n');

console.log(output);
