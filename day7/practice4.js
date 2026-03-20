/**
 * 문제 1. 전역 변수와 지역 변수의 차이를 확인하는 코드를 작성하세요.
 * 
 * 요구사항
 * 1) 전역 변수 count를 10으로 선언한다.
 * 2) 함수 increase() 내부에서
 * 지역 변수 count를 20으로 선언하고 출력한다.
 * 3) 함수 호출 이후함수 밖에서 count를 출력한다.
 * 
 * 실행 예시
 * 20
 * 10
 */

let count = 10;

function increase(){
    let count = 20;
    console.log(count);
}

increase();
console.log(count);


/**
 * 문제 2. 스코프 체인으로 내부 함수가외부 변수에 접근하는 코드를 작성하세요.
 * 
 * 요구사항
 * 1) 전역 변수 score = 50
 * 2) study() 함수 내부에 변수 bonus = 10
 * 3) study() 안에 내부 함수 applyBouns() 선언, score + bonus 출력
 * 4) study() 실행
 * 
 * 실행 예시
 * 최종 점수 : 60
 */

let score = 50;

function study(){
    let bonus = 10;
    function applyBouns(){
        console.log(score + bonus);
    }
    applyBouns();
}

study();


/**
 * 문제3. 내부 함수에서 외부 변수 값을 조합해 출력하는 코드를 작성하세요.
 * 
 * 요구사항
 * 1) 함수 makeMessage()를 만든다
 * 2) 함수 내부 변수 title = "공지" 선언
 * 3) makeMessage 함수 내부에서 내부 함수 print(msg)를 선언
 * 4) print() 호출 시
 * "공지: <msg>"
 * 형식으로 출력될 것.
 * 5) makeMessage()를 실행하고
 * "수업 시작합니다" 를 출력하도록 한다.
 * 
 * 실행 예시
 * 공지: 수업 시작합니다
 */

function makeMessage(){
    let title = "공지";

    function print(msg){
        console.log(`${title} : ${msg}`);
    }
    print("수업 시작합니다");
}

makeMessage();