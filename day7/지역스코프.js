function test() {
    let a = 10;
    const b = 20;
    var c = 30;

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

test();

// console.log(a); // ReferenceError
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// 함수가 실행될 때마다 새로 생성
// 지역 변수는 함수 호출 시 만들어지고, 함수 실행이 끝나면 사라진다.

function count() {
    let num = 1;
    console.log(num);
}

count();  // 1
count();  // 1

// var의 특징
// var는 블록 스코프를 무시하고 오직 함수 단위로만 스코프를 갖는다.

if(true) {
    var d = 10;
}

console.log(d); // 10

// let과 const는 블록 스코프를 가지므로 다르게 동작한다.
if(true) {
    let e = 20;
    const f = 30;
}

console.log(e);
console.log(f);