// 구조분해와 rest 파라미터 사용
const arr1 = [1,2,3,4,5,6];

const[first, second, ...rest] = arr1;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5, 6]

// 객체에서 rest 사용
const user = {name:"이름", age:28, job:"개발자"};

const {name, ...others} = user;

console.log(name);   // 이름
console.log(others); // { age:28, job:'개발자' }

// 함수 매개변수에서 rest 사용
// 가변 인자를 처리할 때 유용하다
function sum(...nums){
    return nums.reduce((acc, cur)=> acc+cur,0)
}

console.log(sum(1,2,3,4,5));    // 15
console.log(sum(1,2,3,4,5,6,7,8,9,10)); // 55

// 배열 나머지 추출 및 합계 계산
const nums2 = [1,2,3,4,5,6];
const [f, ...rest2] = nums2;

const sumRest = rest2.reduce((acc,cur)=> acc+cur,0);
console.log(sumRest); // 20