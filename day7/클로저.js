function 노래방(){
    let 남은시간 = 60; // 외부 함수 변수

    return function 노래부르기() {
        남은시간 -= 5;
        console.log(`남은 시간 : ${남은시간}`);
    };
}

const sing = 노래방();

sing(); // 남은시간 : 55
sing(); // 남은시간 : 50 .....
sing();

// 노래방() 함수는 이미 끝났지만
// sing() 내부함수가 남은시간을 사용하고 있기 때문에 남은시간 변수를 계속 활용 -> 클로저 발생




// 1. 함수 실행 시 내부 변수 count를 계속 누적하고 싶지만, 외부에서 직접 접근하지 못하게 하고 싶을 때 사용
function counter() {
    let count = 0; // 외부에서 접근 불가

    return function() { // 클로저
        count ++;
        console.log(count);
    }
}

const increment = counter();
increment();
increment();

// 2. 콜백 함수에서 상태 유지
function startTimer() {
    let seconds = 0;

    return setInterval(function() {
        seconds++;
        console.log(`경과 시간 : ${seconds} 초`);
    }, 1000);
}

const timer = startTimer();

// 반환된 함수(클로저)가 seconds 변수를 계속 기억하고 있다.
// startTimer 함수 밖에서는 seconds를 직접 수정 불가하기 때문에 이 변수는 안전하다.

// 함수 반복 생성 주의
const counter2 = [];
for(let i=0; i<10000; i++){
    counter2.push(function() {
        console.log(i);
    });
}