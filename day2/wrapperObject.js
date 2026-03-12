// 원시 타입 값을 잠시 객체처럼 감싼다.
const str = "hello";
console.log(str.toUpperCase());

// 원시 타입과 다르게 속성을 가질 수 있다.
const sObj = new String("hello"); //Wrapper 객체 [object]
console.log(typeof sObj);
sObj.extra = "추가";
console.log(sObj.extra);

// Number: 숫자 원시 타입을 감싸는 객체
const num = 123;
console.log(num.toString()); // "123"

const nObj = new Number(123); //Wrapper 객체 [object]
console.log(typeof nObj);

// String : 문자열 원시 타입을 감싸는 객체
const str2 = "Hello";
console.log(str2.length);
console.log(str.toUpperCase());
console.log(str2.toLowerCase());

const sObj2 = new String("Hello"); // Wrapper 객체 [object]
console.log(typeof sObj2);

const flag = true;
console.log(flag.valueOf());

const bObj = new Boolean(false); // Wrapper 객체 [object]
console.log(typeof bObj);