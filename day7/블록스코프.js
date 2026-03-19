// 반복문 예시
// 1) let
for (let i = 0; i<3; i++) {

}

// console.log(i); // ReferenceError

// 2) var
for (var i = 0; i<3; i++) {

}
console.log(i); // 3

/**
 * 문제 1
 * 
 * let과 블록 스코프를 이용하여
 * 아래 조건을 만족하는 코드를 작성하세요
 * 
 * 요구 조건
 * 1) 변수 count를 블록 밖에서 10으로 선언
 * 2) if 블록 내부에서 새로운 count를 20으로 선언
 * 3) 블록 내부에서 count 값을 출력
 * 4) 블록 외부에서 count 값을 출력
 * 
 * 출력 예시
 * 블록 내부: 20
 * 블록 외부: 10
 */

let count = 10;

if(true) {
    let count = 20;
    console.log(`블록 내부 : ${count}`); // 20
}

console.log(`블록 외부 : ${count}`); // 10

/**
 * 문제 2
 * var와 let 스코프 차이를 확인하는 코드를 작성하세요
 * 
 * 요구조건
 * 
 * 1) if 블록 내부에서 var scoreVar = 50; let scoreLet = 50;
 * 2) 블록 밖에서 두 변수 출력
 * 
 * 출력 예시
 * scoreVar = 50
 * scoreLet 는 정의되지 않았습니다.
 */

if(true){
    var scoreVar = 50;
    let scoreLet = 50;
}

try{
    console.log(scoreVar); // 50
    // console.log(scoreLet);
}catch(e){
    //console.error(`scoreLet 는 정의되지 않았습니다. ${e}`); // ReferenceError: scoreLet is not defined
}

/**
 * 문제 3
 * let을 사용하여
 * 숫자 배열에서 짝수만더하는 코드를 작성하세요
 * 
 * 요구 조건
 * 1) numbers = [1,2,3,4,5,6]
 * 2) for 문 안에서 if 블록 사용. let temp는 블록 스코프
 * 3) 짝수만 합산해서 출력
 * 
 * 출력예시
 * 짝수 합계: 12
 */
// reduce, 기본 for문, 배아파 3가지 경우 모두 구현
const numbers = [1,2,3,4,5,6];

const total = numbers.reduce((arr, cur) => {
    if(cur % 2 === 0 ){
        return arr+cur
    }
    return arr
},0);
console.log(total);

let total1 = 0;
for(let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2 === 0) total1 += numbers[i];
}
console.log(total1);

let total2 = 0;
for(const key of numbers){
    if(key %2 === 0) total2+=key;
}
console.log(total2);