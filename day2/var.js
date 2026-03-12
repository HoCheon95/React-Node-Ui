// 호이스팅 예시
console.log(age);

var age = 20;
console.log(age);

// 스코크 문제 예시
if(true){
    var name = "이름";
}
console.log(name);

// 재선언 문제 예시
var count = 1;
var count = 2;
console.log(count);

// let
let count2 = 1;
// let count2 = 2;