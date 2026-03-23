/**
 * 에러 처리를 하지 않으면 조용히 끝나기 때문에 디버깅을 할 수가 없다
 */
const promise1 = new Promise((res, rej) => {
    rej("실패 발생!!");
});

promise1
    .then((res) => {
        console.log(`성공 : ${res}`);
    })
    .catch((err)=>{
        console.log(`에러 발생 : ${err}`);
    });

/**
 * Promise 생성자 안에 비동기 코드를 사용하지 말자
 */

const promise2 = new Promise((res, rej) => {
    setTimeout(()=>{
        res("이것은 Promise 밖에서 처리하자...");
    }, 1000);
});

promise2.then((res) => {
    console.log(`잘못된 처리 결과 : ${res}`);
});

/**
 * 문제점 설명
 * 
 * Promise 생성자 내에서는 동기적인 것만 실행됨
 * 내부에 setTimeout 같은 비동기 코드를 넣으면
 * resolve 호출 시점과 then 호출 시점이 헷갈릴 수 있다
 */

function delay(ms) {
    return new Promise((res) => {
        setTimeout(() => {
            res(`${ms} ms 후 완료`);
        }, ms);
    });
}

delay(1000).then((msg) => console.log(`올바른 비동기 처리 : ${msg}`));