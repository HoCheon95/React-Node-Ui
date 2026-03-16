// 함수 표현식은 호이스팅이 되지 않으므로 호출 전 사용 시 오류가 발생한다.
try{
    hello("이름");
} catch(e){
    console.log(`error : ${e.message}`); // error : Cannot access 'sayHiExpr' before initialization
}

// 함수 표현식
const hello = function(name){
    console.log(`Hello ${name}`);
}

hello("정상 작동 이름");