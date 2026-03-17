// 순서가 있는 데이터 관리
const scores = [80,90,75,85];
console.log(scores[0]);
console.log(scores[2]);

// 동일한 종류의 데이터를 묶어야 할 때 사용 : 숫자는 숫자데이터만 문자열은 문자열데이터만
const fruits = ["apple", "banana", "orange"];
const ages = [20,30,40,50];

// 반복 작업이 필요한 경우
for (const index of fruits){
    console.log(index);
}

// 혼합 타입 배열 (권장하지 않는다)
const mixed = [10, "apple", true];

// Array 생성자 사용 배열 선언
const colors = new Array("red", "green", "blue");

// 길이만 지정하여 배열 선언
const emptyArray = new Array(5);

// Array.of() 사용 배열 선언
const nums = Array.of(1,2,3,4);

// Array.from() 사용 배열 선언
const str = "hello";
const chars = Array.from(str);
console.log(chars);

// 숫자 범위 배열 생성
const num2 = Array.from({length:5},(_,i) => i+1);

// 빈 배열 선언 후 요소 추가
const arr = [];
arr[0] = "red";
arr[1] = "green";

const scores2 = [10,20,30,40,50,60];
// 문제 scores2 배열에 99점을 추가하고, 배열 길이와 마지막 점수를 출력
// 추가 : .push() 길이 : length
scores2.push(99);
console.log(scores2[scores2.length-1])