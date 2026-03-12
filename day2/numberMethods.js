// Math 객체
const num = 3.7;
console.log(`원본   : ${num}`);
console.log(`round  : ${Math.round(num)}`);  // 반올림
console.log(`floor  : ${Math.floor(num)}`);  // 내림
console.log(`ceil   : ${Math.ceil(num)}`);    // 올림

// 난수 1~100
const randomNum = Math.floor(Math.random() * 100) + 1;  // 난수 생성
console.log(`랜덤 숫자(1~100) : ${randomNum}`);

// 문자열 -> 숫자 치환
console.log(`Number('10') : ${Number("10")}`);  // 문자열 -> 숫자
console.log(`parseInt('10.5') : ${parseInt("10.5")}`); // 문자열 -> 정수
console.log(`parseFloat('10.5) : ${parseFloat("10.5")}`); // 문자열 ->실수