function add(a, b) {
  console.log("테스트");
  return a + b;
}

console.log(add(`11`, true));

console.log("\x1b[31m%s\x1b[0m", "----------");

// 함수 사용 전
console.log("안녕 태승");
console.log("안녕 윤하");
console.log("안녕 샤리");
console.log("안녕 비주");

console.log("\x1b[31m%s\x1b[0m", "----------");

// 함수 사용 후
function hello(name) {
  console.log(`안녕 ${name}`);
}

hello("태승");
hello("윤하");
hello("샤리");
hello("비주");

console.log("\x1b[31m%s\x1b[0m", "----------");

// 파라미터 a, b ,c 를 받는 generate 라는 함수를 생성하고
// a * b 후 c를 더한 값을 return 하도록 하세요.

function generate(a, b, c) {
  return a * b + c;
}

console.log(generate(5, 2, 3));
