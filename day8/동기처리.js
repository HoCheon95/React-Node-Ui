console.log("1. 코드 시작!");

function add(a, b) {
    console.log("2. add 함수 실행");
    return a+ b;
}

const res = add(5, 3);
console.log(`3. 결과 : ${res}`);

console.log(`4. 코드 종료`);

/*
순차 계산이 필요할 때
 */
function multi(a, b){
    return a * b;
}

function add2(a, b) {
    return a + b;
}

// 순서대로 계산해야 결과가 정확하다
const res1 = multi(2, 3);   // 6
const res2 = add2(res1, 4); // 10

console.log(res2); // 10

/*
간단한 데이터 처리
*/
const nums = [1,2,3,4,5,6];

const doubled = nums.map(n=>n*2);
console.log(doubled);


/*
map, filter, reduce 등 동기 배열 처리는 순차적으로 실행된다.
*/


/*
큰 파일 처리 시 프로그램 전체가 느려지는 예시
*/
const largeArr = new Array(1e8).fill(0);

for(let i =0; i<largeArr.length; i++) {
    largeArr[i] = i*2;
}
console.log("왕 배열 연산 끝");