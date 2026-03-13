const falsyList = [
    false,      // 1. false 자체
    0,          // 2. 숫자 0
    -0,         // 3. 숫자 -0
    "",         // 4. 빈문자열
    null,       // 5. null
    undefined,  // 6. undefined
    NaN,        // 7. Not a Number
    "   ",
    []
];

falsyList.forEach((falsyValue, index) => {
    const isFalse = !!falsyValue;

    if(falsyValue) {
        console.log(`${falsyValue}가 true로 평가됨`);
    } else {
        console.log(`${index+1} 확인 : 값 ${falsyValue}는 false로 평가됨`);
    }
});