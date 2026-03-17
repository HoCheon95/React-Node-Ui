let age;
// let age = null; // undefined 상태일 때
age = age || 20; // 우측 "기본값" 적용
// null 또는 undefined 는 falsy 한 값이기 때문에 우현의 기본 값을 가진다.
console.log(age); // 20
console.log("\x1b[31m%s\x1b[0m", "----------");

// 함수의 매개변수 기본 값 적용
function greet(message) {
    message = message || "Hello!!";
    console.log(message);
}

greet("Hi");    // Hi
greet();        // Hello!!
console.log("\x1b[31m%s\x1b[0m", "----------");

let count = 0;
count = count || 10;

let count2 = -0;
count2 = count2 || 20;

console.log(count);     // 10
console.log(count2);    // 20
console.log("\x1b[31m%s\x1b[0m", "----------");