/**
 * 문제 1. 배열구조분해
 * 
 * 다음 배열이 있습니다.
 * 
 * const scores = [85,90,78,92];
 * 
 * 요구사항
 * 
 * 첫 번째, 세 번째 점수만 구조분해할당으로 변수 firstScore, thirdScore에 저장
 * 
 * 콘솔에 다음처럼 출력하세요.
 * 
 * 첫 번째 점수 : 85
 * 세 번째 점수 : 78
 * 
 * 출력 예시:
 * 첫 번째 점수 : 85
 * 세 번째 점수 : 78
 */

const scores = [85,90,78,92];

const[firstSoce, ,thirdScore] = scores;
console.log(`첫 번째 점수 : ${firstSoce}, 세 번째 점수 : ${thirdScore}`);

/**
 * 다음 객체가 있습니다.
 * 
 * const person = {name:"Alice", age:20, gender:"여자"};
 * 
 * 요구사항
 * 
 * 구조분해할당으로 변수 userName, userAge를 만들어 name, age 값을 각각 할당
 * 
 * 콘솔에 다음처럼 출력하세요.
 * 
 * 이름: Alice
 * 나이: 20
 */

const person = {name:"Alice", age:20, gender:"여자"};
const {name:userName, age:userAge} = person;

console.log(`이름 : ${userName}, 나이 : ${userAge}`);