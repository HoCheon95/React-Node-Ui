const aplahbets = ["a", "b", "c", "d", "e", "f", "g"];

for (const v of aplahbets) {
  console.log(v);
}

console.log();

// 숫자 배열을 생성 후 향상된 for문을 사용해 console.log를 출력하세요.
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const i of numList) {
  console.log(i);
}

const person = { name: "체인소맨", age: 20, job: "썰기" };

for (const key in person) {
  console.log(`${key}, ${person[key]}`);
}
