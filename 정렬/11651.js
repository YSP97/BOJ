// 11651 좌표 정렬하기2

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const arr = input.map((a) => a.split(' ').map(Number));

const output = arr
  .sort((arr1, arr2) => {
    if (arr1[1] === arr2[1]) {
      return arr1[0] - arr2[0];
    }
    return arr1[1] - arr2[1];
  })
  .map((el) => el.join(' '))
  .join('\n');

console.log(output);
