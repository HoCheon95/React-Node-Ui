const greeting = " Hello Javascript!! ";
console.log(`원본       : ${greeting}`);

// 대문자, 소문자 변환
console.log(`대문자     : ${greeting.toUpperCase()}`);
console.log(`소문자     : ${greeting.toLowerCase()}`);

// 공백 제거
console.log(`trim       : ${greeting.trim()}`);

// 일부 문자열 추출
console.log(`slice(2,7) : ${greeting.slice(2, 7)}`);
console.log(`substring(2,7) : ${greeting.substring(2, 7)}`);

// 포함 여부
console.log(`includes Java  : ${greeting.includes("Java")}`);
console.log(`indexOf Java   : ${greeting.indexOf("Java")}`);

console.log("----------");

const test = " test";
// testObj 를 const 로 선언하고 add 속성명을 더하기 함수를 만들고
// 더하기 함수의 파라미터를
// 문자열 const test = "test";
// 1. 해당 문자열의 length
// 2. "st" 문자열이 시작되는 index.
// 두 개를 넣어서 console.log 로 출력하세요.
const testObj = {
  add: function (a, b) {
    return a + b;
  },
};

const a = test.length;
const b = test.indexOf("st");
console.log(testObj.add(a,b));
