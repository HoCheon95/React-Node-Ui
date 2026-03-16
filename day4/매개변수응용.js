// 기본 값 설명(Default Parameter)
function multiply(a=66, b=1) {
    return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5));    // 5
console.log(multiply());     // 66

// Rest Parameter
// Rest Parameter만 사용
function sumAll(...numbers){
    let sum = 0;
    for(const num of numbers){
        sum+=num;
    }
    return sum;
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,1,3,5,1,3,5,55,22,433,66));
console.log(sumAll(1,433));

// 일반 파라미터와 rest 파라미터 혼합 사용
function test(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

test(1,2,3,4,5,6345,73446);