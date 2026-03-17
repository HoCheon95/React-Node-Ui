/*
학생들의 점수를 가진 배열이 있습니다.
const arrayTest = [45, 82, 67, 90, 58, 73];

다음 단계에 따라 코드를 작성하세요.
1. 점수 올리기 (map)
map을 사용하여 모든 학생 점수에 5점을 더한 새로운 배열 increasedScores를 만드세요.

2. 통과 학생만 필터링(filter)
filter를 사용하여 60점 이상인 점수만 새로운 배열 passedStudents에 저장하세요.

3. 점수 제곱 (map)
map을 사용하여 passedStudents 배열의 모든 점수를 제곱한 새로운 배열 squaredScores 를 만드세요.

4. 출력
increasedScores, passedStudents, squaredScores 를 순서대로 콘솔에 출력하세요.

출력 예시
console.log(increasedScores);
// 
*/

const arrayTest = [45, 82, 67, 90, 58, 73];

// 1)
const increasedScores = arrayTest.map(c=>c+5);
console.log(increasedScores);

// 2)
const passedStudents = increasedScores.filter(c=>c>=60);
console.log(passedStudents);

// 3)
const squaredScores = passedStudents.map(c=>c*c);
console.log(squaredScores);