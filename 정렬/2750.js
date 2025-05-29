const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 입력값 배열
const N = numbers.shift(); // 수의 개수를 제외한 정렬해야하는 배열을 생성(shift 메서드: 배열의 첫번째 요소를 제외한 배열 반환)

numbers.sort((a, b) => a - b).forEach((num) => console.log(num)); // 배열 정렬(sort) 후 콘솔 출력