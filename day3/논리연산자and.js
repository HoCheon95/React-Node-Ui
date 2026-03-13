// 예시 1. 단축 평가 및 반환 값 확인
let count = 0;
const a = true;
const b = false;
console.log(`변경 전 값 : ${count}`);

// 1. 좌향이 true 일 때 : 우향 실행 및 반환
const result1 = a && (count = 10);
// 좌향이 true 이므로 우향이 실행되어 count는 10이 되고, result1은 우향의 값인 10이 된다.
console.log(result1, count); // 10, 10

// 2. 좌향이 false 일 때 : 우향을 실행하지 않음
const result2 = b && (count = 20);
// 좌향이 false 이므로 단축 평가에 의해 우향은 아예 실행되지 않는다.
// result2는 좌향의 값인 false를 반환받고, count 는 전에 할당된 10을 유지한다.
console.log(result2, count); // false, 10

// 예시 2. true/false 값을 이용한 조건부 렌더링 (React 에서 흔히 사용됨)
const isAdmin = true;
const userRole = "manager";
const element = "<button>관리자 설정</button>"; // HTML 요소라 가정

// isAdmin 은 true 이므로, 우향을 평가하고 우향의 값을 반환한다.
const adminView = isAdmin && element;
console.log(`Admin View : ${adminView}`); // <button>관리자 설정</button>

// userRole 이 true 이므로, 우향을 평가하고 우향의 값을 반환한다.
// userRole = null이 아니므로 true 반환
const managerView = userRole && element;
console.log(`Manager View : ${managerView}`); // <button>관리자 설정</button>

const userName = null; // null = False
// userName이 falsy 한 값이므로, 좌향은 값을 반환하고 우향을 평가하지 않음
const nullView = userName && element;
console.log(`NUll View : ${nullView}`); // null

// 예시 3. 기본 할당 방지
let config = { timeout: 3000 };
let defaultTimeout = 5000;

// config.timeout은 true 이므로, 우향을 평가하고 우향의 값을 반환한다.
const timeoutA = config.timeout && defaultTimeout;
console.log(timeoutA); // 5000

config = { timeout: 0 }; // 0도 falsy 한 값이다.

console.log(config.timeout);
const timeoutB = config.timeout && defaultTimeout;
console.log(timeoutB); // 0

// 예시4. if문을 사용한 복합 조건 검사
let isUserLoggedIn = true;
let isAdmin2 = true;
let isPaymentProcessed = false;

// 1. 모든 조건이 true 일 때
if (isUserLoggedIn && isAdmin2 && isPaymentProcessed) {
  console.log("모든 조건 충족!"); 
} else {
  console.log("모든 조건 불충족!"); // 모든 조건 불충족!
}

if (isUserLoggedIn && isAdmin2 && !isPaymentProcessed) {
  console.log("모든 조건 충족!"); // 모든 조건 충족!
} else {
  console.log("모든 조건 불충족!"); 
}