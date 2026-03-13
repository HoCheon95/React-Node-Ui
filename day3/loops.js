// 1. for 문 : 1~10 합 구하기
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(`1~10의 합 : ${sum}`);

// 기본 for 문 사용해서 1~10까지의 곱 출력
sum = 1;
for (let i = 1; i <= 10; i++) {
  sum *= i;
}

console.log(`1~10의 곱 : ${sum}`);

// while 문을 사용하여 5부터 1까지 카운트 다운을 출력하시오!
let i = 5;
while (i >= 1) {
  console.log(`카운트다운 : ${i}`);
  i--;
}

// do~while (최소 1회 실행)
let j = 10;
do {
  console.log("실행!!!!", j);
  j++;
} while (j < 10);

// 배아파 복습. 배열과 향상된 for 문을 사용해서 console.log를 출력하시오.
const a = ["a", "b", "c", "d", "e"];

for (const i of a) {
  console.log(i);
}

console.log();
console.log();
console.log();

// 체인 복습. 객체와 향상된 for문을 사용해 console.log 출력.
const b = { a: "a", b: "b", c: "c", d: "d", e: "e" };

for (const j in b){
    console.log(`key: ${j}, value: ${b[j]}`);
}