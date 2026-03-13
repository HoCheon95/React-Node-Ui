// 예시1. 불린 값 반전
let isAllowed = true;

// 1. 논리 not 연산자를 사용하여 값을 반대로 바꿈
let isDenied = !isAllowed;
console.log(`isDenied: ${isDenied}`); // false

// 2. if문에서 not 사용 : 조건이 false 일 때 실행
if (!isAllowed) {
    console.log("엑세스가 허용되지 않음");
} else {
    console.log("엑세스가 허용됨");
}
// "엑세스가 허용됨"

const userName = "이름"; // 문자열이 null이 아니면 true
const userCount = 0; // 숫자는 0이면 false, 0이 아니면 true

// not 연산자 두 번 사용(강제로 불린으로 변환)
let isTrueUserName = !!userName;
console.log(`!userName : ${isTrueUserName}`) // true 문자열 -> boolean 변경

console.log(`!isTrueUserName : ${!isTrueUserName}`); // false