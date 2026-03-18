// 1. 배열 복사 시 사용
const arr1 = [1,2,3];
const arr2 = [...arr1];
console.log(arr1);
console.log(arr2);

// 2. 배열 병합 시 사용
const a = [1,2];
const b = [3,4];
const res = [...a,...b];
console.log(res);

// 3. 배열 중간에 배열 삽입 시 적용
const c = [1,2];
const d = [4,5];

const res2 = [...c,3,...d];
console.log(res2);

// 새로운 배열 3개를 만들어 arr1을 복사하고 생성된 배열을 병합하여
// [1,2,3,4,5,6,7,8,9,10] 배열을 출력하세요.
const numList1 = [6,7];
const numList2 = [8,9,10];

const numList = [...arr1,...d,...numList1,...numList2];
console.log(numList);

