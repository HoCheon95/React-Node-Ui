const a = 10;
const b = "10";

// === 엄격한 비교 (타입과 값을 모두 비교)
console.log(a === b); // false

// !== 엄격한 비교
console.log(a !== b); // true

// == 느슨한 비교(값만 비교, 타입은 자동 변환)
console.log(a == b); // true

// !=
console.log(a != b); // false

// > 
console.log(a > b); // false

// <
console.log(a < b); // false

// >=
console.log(a >= b); // true 자동 형변환
// console.log(a => b); // 컴파일러 오류가 안나니 조심!

// <=
console.log(a <= b); // true 자동형변환