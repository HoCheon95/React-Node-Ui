// 문제 1 : 함수 선언식 sayHiDecl을 만들어 "Hi from Declaration!" 출력 후 호출하세요.
// 함수 선언식

sayHiDecl();

function sayHiDecl() {
  console.log("Hi from Declaration!");
}

sayHiDecl();

console.log("\x1b[31m%s\x1b[0m", "----------");

// 문제 2 : 함수 표현식 sayHiExpr을 만들어 "Hi from Expression!" 출력 후 호출하세요.
// 선언 전에 호출하면 어떤 에러가 나는지 확인해보세요.

try {
  sayHiExpr();
} catch (e) {
  console.log(`error : ${e.message}`); // error : Cannot access 'sayHiExpr' before initialization
}

const sayHiExpr = function () {
  console.log("Hi from Expression!");
};

sayHiExpr();

console.log("\x1b[31m%s\x1b[0m", "----------");

// 문제 3 : 두 숫자를 받아 더한 값을 반환하는
// 함수 선언식 addDecl과 함수 표현식 addExpr 을 각각 만들어 호출 후 출력

// 함수 선언식 addDecl
function addDecl(a, b) {
  return a + b;
}

// 함수 표현식 addExpr
const addExpr = function (a, b) {
  return a + b;
};

console.log(addDecl(1, 2));
console.log(addExpr(1, 2));

console.log("\x1b[31m%s\x1b[0m", "----------");
