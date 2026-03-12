/*
문제1

요구사항
1)사용자 정보 변수를 선언한다.
2)name, job, hobby, age 변수를 선언한다.
3)위 4개의 변수를 사용한다.
4)템플릿 리터럴을 사용하여 4줄로 된 자기소개를 출력해보자.
*/

const name = "이순신";
const job = "백수";
const hobby = "축구";
const age = 20;

console.log(`
    제 이름은 ${name} 이고,
    직업은 ${job} 입니다.
    취미는 ${hobby} 이며
    나이는 ${age}살 입니다.
`);

console.log("-------------");

/*
-- 심화
객체 내 4개의 변수를 선언 및 값 할당 후
객체 내 함수를 생성하여 함수 실행 시 4줄로 된 자기소개 출력
객체 바깥에서 함수만 호출 했을 떄 4줄로 된 자기소개 출력
*/

const person = {
  name: "이순신",
  job: "백수",
  hobby: "축구",
  age: 20,
  rest: function () {
    console.log(`
    제 이름은 ${this.name} 이고,
    직업은 ${this.job} 입니다.
    취미는 ${this.hobby} 이며
    나이는 ${this.age}살 입니다.
    `);
  },
};

person.rest();

console.log("-------------");

/*
문제2

요구사항
1) 문자열로 된 숫자 priceString 변수를 선언한다.
2) priceString 변수를 숫자로 변환한다. (정수, 실수 다 괜찮음)
3) 10%할인 됨 priceString 을 출력해보자.
 */

const priceString = "1000";
console.log(parseInt(priceString) * 0.9);

console.log("-------------");

/*
문제3

요구사항
1) 오늘 날짜를 추출한다.
2) 날짜를 문자열로 변환한다.
3) year, month, day 3개의 변수를 선언하여 연, 월, 일을 각각 담는다.
4) 템플릿 리터럴을 사용하여
연도: ~~~ : today.getFullYear()
월: ~~~ : getMonth()
일: ~~~ : getDate()
이렇게 여러줄로 출력한다.
 */

const today = new Date();

const year = today.getFullYear(); // 년도
const month = today.getMonth(); // 월
const day = today.getDate(); //일
console.log(`
    연도 : ${year}, 
    월 : ${month}, 
    일 : ${day}
    `);

/*
문제4
dateString 을 
slice 또는 substring 사용 해서 템플릿 리터럴로 출력
2025 - 12 - 10
 */
const dateString = today.toISOString();
console.log(dateString);
console.log(dateString.slice(0,10));
console.log(`${dateString.slice(0,4)} - ${dateString.slice(5,7)} - ${dateString.slice(8,10)}`);

console.log("-------------");

/*
문제5

회원의 기본 포인트가 120점이고, 이번 달 추가 적립률은 15%이다.
추가 포인트와 최종 포인트를 계산해 아래 형식으로 출력하시오.

출력 예시:
기본 포인트: 120
15% 추가 적립: 18.0점
현재 포인트는 총 138.0점 입니다.
 */

const point = 120;

const plusPoint = point * 0.15;
const totalPoint = point + plusPoint;

console.log(`
기본 포인트: ${point}
15% 추가 적립: ${plusPoint}
현재 포인트는 총 ${totalPoint}점 입니다.
`);

// day1 폴더 내 test 폴더를 생성하고 프로젝트화 진행
// chalk 라이브러리를 test 폴더 내 설치하고 chalk 라이브러리를 사용하여 console.log 출력