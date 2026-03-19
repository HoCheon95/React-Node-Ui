// 1. 배열
const arr1 = [1,2,[3,4]];
const arr2 = [...arr1]; // 얕은 복사

arr2[0] = 10; // 원본에 영향이 없다
arr2[2][0] = 30; // 내부 배열은 공유 -> 원본도 변한다

console.log(arr1); // [  1, 2, [ 30, 4 ] ]
console.log(arr2); // [ 10, 2, [ 30, 4 ] ]

// 2. 객체
const obj1={a:1, b:{c:2}};
const obj2 = {...obj1};

obj2.a=10;
obj2.b.c=20;

console.log(obj1); // { a:  1, b: { c: 20 } }
console.log(obj2); // { a: 10, b: { c: 20 } }