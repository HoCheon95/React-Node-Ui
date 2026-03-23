/**
 * 콜백 지옥 해결 예시
 */
function callbackHell() {
    setTimeout(()=>{
        console.log("1단계 완료");
        setTimeout(()=>{
            console.log("2단계 완료");
            setTimeout(()=>{
                console.log("3단계 완료");
            }, 500);
        }, 500);
    }, 500);
}

callbackHell();

/**
 * promise를 사용한 콜백지옥 해결
 */
function step1(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("1단계 완료"), 500);
    });
}
function step2(prev){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(prev + "2단계 완료"), 500);
    });
}
function step3(prev){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(prev + "3단계 완료"), 500);
    });
}

/**
 * then으로 순차 실행
 */
step1()
    .then(step2)
    .then(step3)
    .then((result)=>{
        console.log(`promise 로 콜백 지옥 해결${result}`);
    })

/**
 * 여러 비동기 작업 제어 : Promise.all
 * 모든 작업이 끝나야 결과를 반환, 하나라도 실패하면 전체 실패
 */
function taskA(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("A 완료"), 500);
    });
}
function taskB(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("B 완료"), 1500);
    });
}
function taskC(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("C 완료"), 1000);
    });
}

/**
 * 모든 작업이 끝나면 실행
 */
Promise.all([taskA(), taskB(), taskC()])
    .then((result)=>{
        console.log(`Promise.all 결과 : ${result}`);
    });

/**
 * Promise.race : 여러 작업 중 가장 먼저 끝나는 하나만 반환, 달리기 시합을 생각하면 된다(1등만 중요!)
 */
Promise.race([taskA(), taskB(), taskC()])
    .then((winner)=>{
        console.log(`Promise.race 결과 : ${winner}`);
    });