/**
 * Promise는 한 번 결정되면 바뀌지 않는다.
 */
const promise1 = new Promise((resolve, reject) => {
    resolve("성공하면 결정!");
    reject("실패로 바꿀 수 있을까..?");
});

promise1  
    .then((result)=>console.log(`result : ${result}`))
    .catch((err)=>console.log(err));


/** 
 * then은 항상 새로운 Promise를 반환한다 -> 연속적인 체인 가능
 */
const promise2 = new Promise((resolve) => resolve(10));

promise2
    .then((value)=>{
        console.log(`첫 번째 then : ${value}`);
        return value * 2; // 다음 then에 전달됨
    })
    .then((value)=>{
        console.log(`두 번째 then : ${value}`);
        return value + 5; // 다음 then에 전달됨
    })
    .then((value)=>{
        console.log(`세 번째 then : ${value}`);
    })

    /**
     * promise는 비동기지만 동기적으로 실행되는 부분이 있다
     */
    const promise3 = new Promise((resolve, reject) => {
        console.log(`첫 번째 실행`);
        // resolve 나 reject 이전에 있는 함수나 console은 동기적으로 실행된다.
        resolve("Promise 가 resolve 됨");
    });

    promise3.then((result) => {
        console.log(`then 비동기 실행 : ${result}`);
    });

