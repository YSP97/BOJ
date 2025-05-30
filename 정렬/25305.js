// BOJ 25305
// 입력값: N(응시자 수) k(상받는 사람의 수)
//        각 학생의 점수(공백 포함)

//  출력값: 점수
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄(응시자수 N, 상 받는 사람 수 k)
let input1 = input[0].split(' ');
const N = input1[0];
const k = input1[1];

// 두 번째 줄(학생들의 점수)
const score = input[1].split(' ');

score.sort((a, b) => b - a);

console.log(score[k - 1]);
