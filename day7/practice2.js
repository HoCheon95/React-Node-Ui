/**
 * 문제 2 - 지역 변수 보호
 * 
 * 설명
 * 함수 내부에서만 유효한 지역 변수 data를 선언하고 출력하세요
 * 함수 밖에서는 접근하지 못하도록 해야 합니다
 * 
 * 요구조건
 * 함수 이름은 showData()
 * 함수 내부에서 data = 10 선언 후 출력
 * 
 * 출력 예시
 * 10
 */

function showData() {
    let data = 10;
    console.log(data); // 10
}

showData();

// console.log(data); // ReferenceError

/**
 * 문제 3 - var vs let 차이
 * 
 * 설명
 * 블록 안에서 변수를 선언하고, 블록 밖에서 값을 확인하세요.
 * var와 let의 차이를 이해하도록 합니다
 * 
 * 요구조건
 * varVar = 10 (var) / letVar = 20 (let) 선언
 * if(true) 블록 안에서 각각 값을 변경
 * 블록 밖에서 출력해 var는 변했는지, let은 변했는지 확인
 * 
 * 출력 예시
 * varVar = 50;
 * lerVar = 20;
 */

var varVar = 10;
let letVar = 20;

if(true) {
    varVar = 50;
    let letVar = 50;
}

console.log(varVar); // 50
console.log(letVar); // 20
