// 일반 함수
function greet1(name){
    return "Hello" + name;
}

// 화살표 함수
const greet2 = (name) => {
    return "Hello" + name;
}

const greet3 = name => "Hello" + name;
const greet4 = (name) => "Hello" + name;
const greet5 = (name) => {return "Hello" + name;}
const greet6 = name => {return "Hello" + name;}

console.log(greet1("greet1"));
console.log(greet2("greet2"));
console.log(greet3("greet3"));
console.log(greet4("greet4"));
console.log(greet5("greet5"));
console.log(greet6("greet6"));


console.log("\x1b[31m%s\x1b[0m", "----------");
// 문제 1 (기본 활살표 함수) : 두 숫자를 받아 더한 값을 반환하는
// 화살표 함수 sum을 작성하고 호출하세요.
const sum = (a, b) => {
    return a + b;
}

console.log(sum(1,2));
console.log("\x1b[31m%s\x1b[0m", "----------");
// 문제 2 (return 생략 연습) : 한 숫자를 받아 제곱을 반환하는
// 화살표 함수 square를 만들어 호출하세요. return 과 { } 생략할 것
const square = a => a * a;

console.log(square(2));