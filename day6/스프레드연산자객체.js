// 1. 객체 복사
const p = {name:"이름", age:20};
const copy = {...p};

console.log(copy);

console.log(copy.age);

// 2. 객체 병합(모든 속성을 합친다.)
const p2 = {hobby:"개발", phone:"010"};

const merged = {...p,...p2};
console.log(merged);

// 3. 같은 키가 있으면 뒤에 있는 객체가 덮어쓴다.
const p3 = {name:"이름3", age:60};

const res  = {...p,...p3};
console.log(res);

// 구조분해할당과 함께 사용
// 1. 배열 나머지 추출
const nums = [10,20,30,40,50];

const[first,...rest] = nums;
console.log(first);
console.log(rest);

// 2. 객체 나머지 추출
const {name, ...others} = merged;

console.log(name);
console.log(others);