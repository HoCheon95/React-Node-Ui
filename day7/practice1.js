/**
 * 문제 1
 * 
 * 전역 변수 count2를 하나 만들고,
 * 함수 add2()를 호출할 때마다 count가 1 증가하도록 코드를 작성하세요.
 * 
 * 요구조건
 * counst2는 전역 변수여야 한다.
 * add2()를 3번 호출한 뒤,
 * console.log()로 최종 count2 값을 출력할 것
 * 
 * 출력 예시
 * 3
 */

let count2=0;

function add2() {
    count2++;
}

add2();
add2();
add2();

console.log(count2); // 3

/**
 * 문제 2
 * 
 * 전역 변수 score2 = 0 이 있다
 * 사용자가 어떤 행동을 할 때 점수를 올려주는 함수를 작성하시오
 * 
 * 요구 조건
 * increaseScore2(points) 함수는 전달받은 점수만큼 score2를 증가시킨다
 * 
 * increaseScore2(5)
 * increaseScore2(10)
 * 두 번 실행 후
 * score 값을 출력하라
 * 
 * 출력 예시
 * 15
 */

let score2 = 0;

function increaseScore2(points) {
    score2+=points;
}

increaseScore2(5);
increaseScore2(10);

console.log(score2);  //15