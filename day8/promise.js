// 가장 기본적인 promise 예제

// promise는 "미래에 완료될 작업" 을 표현하는 객체
// resoleve -> 성공 / reject -> 실패
const myPromise = new Promise((resolve, reject) =>{
    // 비동기 작업을 흉내내기 위해 setTimeout을 사용
    setTimeout(()=>{
        const success = true;

        if (success) {
            resolve("기본 promise 성공!");
        } else {
            reject("기본 promise 실패");
        }
    }, 1000);
});

// promise 실행
myPromise
    .then((msg) =>{
        // resolve가 실행되면 실행
        console.log(msg);
    })
    .catch((err) =>{ 
        // reject가 실행되면 실행
        console.log(err);
    })
    .finally(() =>{
        // 성공 실패 상관 없이 무조건 마무리에 실행
        console.log("기본 promise 완료!");
    });