// 11650 좌표 정렬하기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 줄 제거 (좌표 개수)
input.shift();

// 좌표 배열로 변환
const arr = input.map((a) => a.split(' ').map(Number));

// 정렬
const output = arr
  .sort((arr1, arr2) => {
    if (arr1[0] === arr2[0]) {
      return arr1[1] - arr2[1];
    }
    return arr1[0] - arr2[0];
  })
  .map((el) => el.join(' '))
  .join('\n');

// 한 번에 출력
console.log(output);
