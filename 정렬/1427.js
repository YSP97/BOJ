// 1427 소트인사이드

// 입력: 정렬하고자하는 수 N
// 출력: 내림차순으로 정렬한 수 출력

const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((item) => Number(item));
// 예를 들어 2143 입력 시
// readFileSync: 입력 값을 읽음 2143
// toString(): 문자열로 변환 '2143'
// trim(): 문자열 앞뒤 공백 제거 '2143'
// split("\n"): 개행문자 기준으로 문자열을 나누어 배열로 만듦 ['2', '1', '4', '3' ]
// map(item => Number(item)): 모든 문자열을 숫자로 바꿈 [2, 1, 4, 3]

input.sort((a, b) => a - b); // 배열의 숫자를 정렬

console.log(input.join('')); // join: 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환
