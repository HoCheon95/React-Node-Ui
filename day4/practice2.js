// 문제 1 : greetUser 함수를 만들어 **이름(name)** 과 **나이(age)**를 매개변수로 받아
// "Hello, 이름! You are 나이 years old."를 출력하세요.

function greetUser(name, age){
    return console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetUser("이순신", 20);

// 문제 2 : power 함수를 만들어 a^b(제곱) 계산하도록 구현.
// 1) b는 기본값 2로 설정
// 2) a 와 b는 매개변수
function power(a, b=2){
    return console.log(a**b);
}

power(2,5);

// 문제 3 : multiplyAll 함수를 만들어 여러 숫자를 받아 모두 곱한 결과를 반환하세요.
// 1) 몇 개의 숫자가 들어올지 미리 알 수 없음 -> Rest 파라미터 사용
function multiplyAll(...nums){
    let sum = 1; // 곱하기 항등원 1, 더하기 항등원 0
    for(const i of nums){
        sum*=i;
    }
    console.log(sum);
}

multiplyAll(1,2,5,2,4,2,6,7,3,4);