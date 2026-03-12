// let 예시
let age; // 변수가 선언 됨
age = 20; // 선언된 변수에 값을 할당
console.log("나이", age);

// 변수는 재할당이 가능하다
age = 21;
console.log("변경된 나이", age);

// const 예시
const PI = 3.14;
console.log(PI);
// PI = 3.14231432;
console.log(PI);

// const 변수 자체 재할당 불가 예시
const obj = { name: "이름" };
console.log(obj);
// obj = {name : "재할당 이름"};
console.log(obj);

// const 객체 내부 속성 수정 가능 예시
const obj2 = { name: "이름(가능)", age: 20 };
console.log(obj2.age);
obj2.age = 100;
obj2.name = "이름(수정)";
console.log(obj2);

// obj3 객체를 const 로 생성하고 속성은 name, age, alias(별명)을 선언하고 속성 값 재할당을 해보시오
const obj3 = { name: "이름", age: 20, alias: "별명" };
console.log(obj3);
obj3.name = "수정된 이름";
obj3.age = 30;
obj3.alias = "수정된 별명";
console.log(obj3);

const obj4 = Object.freeze({name:"얼린이름"});
obj4.name = "녹은이름";
console.log(obj4);