// 전역 변수 충돌 예시

let x = 10;

function test() {
    let x = 20;
    console.log(`x는 뭐가 나올까? : ${x}`); // 20
}

test();
console.log(`x는 뭐가 나올까? : ${x}`); // 10