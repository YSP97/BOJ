// 1. 체스판 시작이 W or B
// 2. (1,1)부터 칠해져야하는 체스판과 비교하며 최소한의 체스가 칠해지도록 수정
// 3 체스 배열의 i, j를 1씩 증가하여 i<8, j<8인 경우까지만 반복문 -> 만약 설정해둔 체스판과 다르다면 count +1
// 5. count가 최소인 것을 출력
// 6. 단, 행렬이 모두 8이상이 되면 안됨 따라서 -7을 해줌
// => 예를 들어, (10, 10)인 경우 (2, 2)까지만 count함! 따라서 10-7=3보다 작은 수까지만 반복문

// 백준 입력값 받기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [size, ...arr] = input;
let [row, col] = size.split(' ');

arr = arr.map((i) => i.split(''));

const answer = [];

const whiteFirstChess = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

const blackFirstChess = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

const countWhiteFirst = (x, y) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[x + i][y + j] !== whiteFirstChess[i][j]) count++;
    }
  }
  return count;
};

const countBlackFirst = (x, y) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[x + i][y + j] !== blackFirstChess[i][j]) count++;
    }
  }
  return count;
};

// 카운트 결과를 배열로 담기 -> 최솟값 출력
for (let j = 0; j < row - 7; j++) {
  for (let k = 0; k < col - 7; k++) {
    answer.push(countWhiteFirst(j, k));
    answer.push(countBlackFirst(j, k));
  }
}
console.log(Math.min(...answer));
