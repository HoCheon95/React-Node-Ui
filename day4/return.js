function greet(name) {
  console.log("Hello" + name);
}
const res = greet("이름");
console.log(res); // undefined

console.log("\x1b[31m%s\x1b[0m", "----------");
const sum = (a, b) => a + b; // 화살표 함수는 return이 없어도 암묵적 반환
console.log(sum(3, 4)); // 7

console.log("\x1b[31m%s\x1b[0m", "----------");
const multiply = (a,b) => {return a*b;};
console.log(multiply(3,4)); // 12

console.log("\x1b[31m%s\x1b[0m", "----------");
const multiply2 = (a,b) => {a*b;};
console.log(multiply2(3,4)); // undefined

// 조건문 내에서 return 생략
function checkEven(num) {
    if(num % 2 === 0) { // 짝수면 "true" return
        return true;
    }
    // 홀수면 "undefined" return
}
console.log("\x1b[31m%s\x1b[0m", "----------");
console.log(checkEven(9)); 


// 1) calculateDiscount(price, discount) 함수는 물건 가격(price)에서 할인율(discount%)을 적용해 할인된 가격을 반환합니다.
// 2) applyTax(price, taxRate) 함수는 가격(price)에 세금 (taxRate%)을 더해 최종 결제 금액을 반환합니다.
// 3) 사용자 변수 : originalPrice = 10000
// 4) 할인율 : discount = 20%
// 5) 세율 : taxRate = 10%
// 6) 두 함수를 연쇄적으로 호추하여, 먼저 할인을 적용한 후 세금을 붙인 최종 결제 금액을 계산하고 출력하세요.
// 7) 예상출력 : 최종 가격: 8800
// 힌트 : 먼저 calculateDiscount로 할인 가격 계산 -> 그 결과를 applyTax에 전달
// 문제 : 할인 적용 후 세금 계산

console.log("\x1b[31m%s\x1b[0m", "----------");
// price에서 discount 적용해 할인된 가격을 반환
function calculateDiscount(price, discount) {
    return price * (1 - discount/100);
}

// price에 taxRate 를 더해 최종 결제 금액 반환
function applyTax(price, taxRate) {
    return price * (1 + taxRate/100);
}

const originalPrice = 10000; // 사용자 변수
const discount = 20; // 할인율
const taxRate = 10; // 세율

const rest = applyTax(calculateDiscount(originalPrice, discount), taxRate);

console.log(`최종 가격 : ${rest}`);;
