// JSON을 활용하여 깊은 복사
const obj1 = {a:1, b:{c:2}};
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.b.c=99999;

console.log(obj1); // { a: 1, b: { c: 2 } }
console.log(obj2); // { a: 1, b: { c: 99999 } }