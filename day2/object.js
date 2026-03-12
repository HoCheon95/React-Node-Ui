// 일반 객체(Object)
const person = {
  name: "이름",
  age: 27,
  greet: function () {
    console.log(`안녕하세요, ${this.name} 입니다.`);
  },
};

person.greet();

// Array (배열)
const fruits = ["apple", "banana", "orange"];
console.log(fruits[1]);
fruits.push("grape");
console.log(fruits);

// Function(함수)
function add(a, b) {
  // 함수 선언식
  return a + b;
}
const multiply = function (a, b) {
  // 함수 표현식
  return a * b;
};

console.log(add(2, 3));
console.log(multiply(3, 4));

// Date(날짜 객체)
const today = new Date();
console.log(today);

// RegExp: 정규표현식 객체
const pattern = /abc/;
console.log(pattern.test("abcdef"));
console.log(pattern.test("def"));

// person2 라는 객체를 const 로 생성하고 name, age 속성을 추가하고
// rest속성을 추가하는데 rest 속성은 나머지를 구하는 함수여야 한다.
// 객체를 완성 시킨 후 객체 내 rest 함수를 호출하시오.
const person2 = {
  name: "이름",
  age: 20,
  rest: function (a, b) {
    console.log(`나머지: ${a % b}`);
    console.log(`  제곱: ${a ** b}`);
  },
};

person2.rest(4, 2);
