// 문제 1 - 홀수 합 구하기 (for + if + continue)
// 1~50까지 숫자 중 홀수만 합산해서 출력하세요.

let sum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum += i;
}

console.log(sum);

// 문제 2 - 숫자 찾기 (for + if + break)
// 배열에서 특정 숫자(예:17)를 찾아 발견 즉시 반복 종료하고 위치(index) 출력
const numbers = [3, 7, 12, 17, 21, 30];

let selectNum = 30;

for (let i = 0; i < numbers.length; i++) {
  if (selectNum === numbers[i]) {
    console.log(i);
    break;
  }
}

// 문제 3 - 요일 출력 (switch)
// 숫자 1~7을 입력하면 요일 출력, 잘못된 숫자는 "잘못된 요일" 출력

const num = 3;
let dayName;

switch (num) {
  case 1:
    dayName = "월요일";
    break;
  case 2:
    dayName = "화요일";
    break;
  case 3:
    dayName = "수요일";
    break;
  case 4:
    dayName = "목요일";
    break;
  case 5:
    dayName = "금요일";
    break;
  case 6:
    dayName = "토요일";
    break;
  case 7:
    dayName = "일요일";
    break;
  default:
    dayName = "잘못된 요일";
}
console.log(dayName);

// 문제 4 : 1~30 숫자 중 3의 배수는 건너뛰고, 25 이상이면 반복 종료
/*
1) 1~30까지 반복
2) 3의 배수는 출력하지 않고 건너뛰기 (continue)
3) 숫자가 25 이상이면 반복 종료 (break)
4) 그 외 숫자는 출력
 */

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) continue; // 3의 배수 스킵
    if(i >= 25) break; // 25이상 반복 종료
    console.log(i);
}
