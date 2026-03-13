// 추억의 구구단
for (let i = 1; i <= 9; i++) {
  console.log(`${i}단`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  } // 곱
} // 단

// 2차원 배열 순회
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}${j}] = ${matrix[i][j]}`);
  }
}

// break
// 1~20 중 13을 만나면 반복 종료
for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    console.log(`13을 만나서 종료!`);
    break;
  }
  console.log(i);
}

// continue
// 1~20 중 홀수만 출력
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    // 짝수면 건너뜀
    continue;
  }
  console.log(i);
}

console.log();
console.log();
console.log();
// 1~20에서 홀수만 출력하다가 15이상이면 반복 종료되게 하세요.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
  if (i >= 15) {
    console.log(`15를 만나 종료!`);
    break;
  }
}
