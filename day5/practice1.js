/*
문제 : 학생 점수 5점 올린 후 제곱
문제 설명

학생들의 점수를 가진 배열 arrayTest가 있습니다.
const arrayTest = [80, 90, 75];
다음 단계에 따라 코드를 완성하세요.

1) 점수 추가 (push)

기존 배열 arrayTest에
70, 85, 60을 push로 추가하세요.

2) 점수 변환 (map)

map을 사용하여
배열의 모든 점수에 5점을 더한 새로운 배열 increasedScores를 만드세요.

3) 점수 변환 (map)

map을 사용하여
increasedScores 배열의 모든 점수에 제곱을 한 새로운 배열 squaredScores를 만드세요.

map은 원본 배열을 바꾸지 않고,
변환된 값들을 모아 새 배열을 만들어 반환한다는 점을 기억하세요.
*/

const arrayTest = [80, 90, 75];

arrayTest.push(70, 85, 60);

const increasedScores = arrayTest.map(c=>c+5);

const squaredScores = increasedScores.map(a=>a*a);

console.log(arrayTest);
console.log(increasedScores);
console.log(squaredScores);