/**
 * 문제 1: 점수 합계 구하기
 * 
 * 학생들의 점수가 저장된 배열 arrayTest가 있습니다.
 * 
 * const arrayTest = [10,20,30,40];
 * 
 * 문제 요구사항
 * 
 * reduce를 사용하여 arrayTest의 모든 점수 합계를 구하고, 변수 totalScore에 저장하세요.
 * 
 * 콘선에 totalScore를 출력하세요.
 */

const arrayTest = [10,20,30,40];

const totalScore = arrayTest.reduce((arr, cur)=> arr + cur,0);

console.log(totalScore);

/**
 * 문제 2: 점수 곱 구하기
 * 
 * 동일한 배열 arrayTest를 사용하여,
 * 
 * 문제 요구사항
 * 
 * reduce를 사용하여 모든 점수의 곱을 계산하고, 변수 productScore에 저장하세요.
 * 
 * 콘솔에 productScore를 출력하세요.
 * 
 * 출력 예시
 * 모든 점수의 곱 : 240000
 */

const productScore = arrayTest.reduce((acc, cur) => {
    return acc * cur;
}, 1);

console.log(`모든 점수의 곱 : ${productScore}`);