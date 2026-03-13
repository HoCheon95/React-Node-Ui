// 예시 1. 단축 평가 및 기본 값 제공

let userName = null; // null은 falsy 한 값이다.
let defalutName = "Guest";

// 1. 좌향이 false(null)이므로, 우향을 평가하고 우향의 값을 반환
let finalName = userName || defalutName;
console.log(finalName); // Guest

let userRole = 'admin'; // null 아닌 값은 truthy한 값이다.

// 2. 좌향이 true 이므로, 단축 평가에 의해 우향을 실행하지 않고 좌향의 값을 반화
let finalRole = userRole || 'member';
console.log(finalRole); // admin

// 예시2. 단축 평가로 인한 함수 실행 방지
let count = 0;

function logAndReturn(val){
    console.log(`두 번째 피연산자가 실행됨.`);
    return val;
}

// 1. 좌향이 true 이므로, 우향을 실행하지 않는다.
let result1 = 1 || logAndReturn(10);
console.log(result1); // 1

// 2. 좌향이 falsy 이므로, 우향을 실행한다.
let result2 = 0 || logAndReturn(20);
console.log(result2); 
// 두 번째 피연산자가 실행됨
// 20

// 예시3. if 문과 or
let isManager = false;
let isTester = true;
let hasPermission = false;

// 1. or 연산자를 if 문에 사용 : 두 조건 중 하나라도 true 인지 검사
if(isManager || isTester){
    hasPermission = true;
    console.log(`관리자 또는 테스트 권한이 있으므로 접근 허용`);
} else {
    console.log("접근 권한이 없습니다.");
}

console.log("최종 권한 상태", hasPermission);
// 관리자 또는 테스트 권한이 있으므로 접근 허용
// true