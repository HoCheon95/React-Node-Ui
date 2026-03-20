/*
문제 1. 인사 콜백

요구사항
1) greet 함수를 만들고, 이름(name) 과 콜백 (callback)을 인자로 받는다.
2) greet 함수에서 "Hello, [name]!"을 출력 후 콜백을 실행하도록 하세요.

출력 예시
Hello, HanSung!
인사 끝!
*/

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

greet("HanSung", function(){
    console.log("인사 끝!");
});


/*
문제 2. 숫자 두 배 처리

요구사항
1) doubleNumbers 함수를 만들고, 숫자 배열과 콜백을 인자로 받는다.
2) 콜백에서 배열의 각 숫자를 2배로 만든 새로운 배열을 출력한다. (map 사용)

출력 예시
[2,4,6,8,10]
*/
function doubleNumbers(numList, callback){
    callback(numList);
}

const nums = [1,2,3,4,5];

doubleNumbers(nums, function(nums){
    let doubled = nums.map(n=>n*2);
    console.log(doubled);
});


/*
문제 3. 조건에 맞는 콜백

요구사항
1) checkAge 함수를 만들고, 나이(age)와 두 개의 콜백(onAdult, onMinor)을 인자로 받는다.
2) 나이가 20 이상이면 onAdult 실행, 미만이면 onMinor 실행

출력 예시
// 나이가 25일 때
성인입니다.

// 나이가 15일 때
미성년자입니다.
*/

function onAdult() {
    console.log(`성인입니다.`);
}
function onMinor(){
    console.log(`미성년자입니다.`);
}

function checkAge(age, onAdultCallback, onMinorCallback){
    if(age >= 20){
        onAdultCallback();
    } else {
        onMinorCallback();
    }
}

checkAge(25, onAdult, onMinor);