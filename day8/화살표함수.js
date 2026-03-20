/*
일반 화살표 함수
*/
const arrowF = (name) => {
    return `안녕하세요 ${name}`;
}

console.log(arrowF("호천"));


/*
문제 1. arrowF 함수 중 생략 가능한 요소를 생략하여 남은 2가지의 함를 만들어 보시오
*/

const arrowF1 = (name => `안녕하세요 ${name}`);

console.log(arrowF1("호천1"));

/*
문제 2. 매개변수가 2개인 화살표함수를 만들고 생략 가능한 모든 경우의 함수식을 만드세요.
 */
const arrowF3 = ((name, age) => {
    return `안녕하세요 ${name}님, 나이는 ${age} 입니다.`;
})
console.log(arrowF3("호천3", 20));