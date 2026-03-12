const name = "비주";
const age = 25;

// 일반 문자열 연결
console.log("안녕하세요, " + name + "님. 나이는 " + age + "살 입니다.");

// 템플릿 리터럴(백틱) 사용
console.log(`안녕하세요, ${name}님. 나이는 ${age}살 입니다.`);

// 문자열 인덱싱과 길이 확인
const str = "JavaScript";
console.log(`첫 글자: ${str[0]}`);
console.log(`마지막 글자 : ${str[str.length-1]}`);
console.log(`문자열 길이 : ${str.length}`);