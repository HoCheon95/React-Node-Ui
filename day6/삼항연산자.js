const score = 85;

// 변수에 삼항연산자 결과 저장
const res = score >= 60?"합격":"불합격";

console.log(res); // 합격

// 중첩 삼항연산자
const grade = score >= 90? "A":
                score >= 80? "B":
                score >= 70? "D":"F";
console.log(grade); // B

/**
 * 문제 3 : 학생 점수 등급
 * 
 * 다음 변수가 있습니다.
 * 
 * const score = 78;
 * 
 * 요구사항
 * 점수에 따라 등급을 출력하세요.
 * 90 이상 -> "A"
 * 80 이상 -> "B"
 * 70 이상 -> "C"
 * 70 미만 -> "F"
 * 
 * 삼항연산자만 사용하여 출력하세요.
 * if-else는 사용하지 않습니다.
 * 출력 예시 : C
 */
const score2 = 70;

console.log(score2 >= 90?"A": 
            score2 >= 80?"B": 
            score2 >= 70?"C":"F");

/**
 * 성별과 점수 조건 결합
 * 
 * 다음 변수가 있습니다.
 * 
 * const gender = "M";
 * const score = 85;
 * 
 * 요구사항
 * 
 * 점수가 60 이상이면 "합격" 아니면 "불합격"
 * 
 * 출력 시 성별을 포함하여 "남자 합격", "여자 불합격" 형태로 출력
 * 
 * 삼항연산자만 사용하세요.
 * 
 * 출력 예시 : 합격 남자
 */

const gender = "M";
const score3 = 85;

console.log((score3 >= 60?"합격":"불합격") + (gender === "M"?"남자":"여자"));

