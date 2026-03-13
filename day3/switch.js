/*
요일 번호 (1~7)을 입력 받아 해당 요일을 출력하시오.

1 -> 월요일
.
.
.
7 -> 일요일
 */

const day = 3;
let dayName;

switch (day) {
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
    beak;
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
    dayName = "없는 요일";
}

console.log(dayName);