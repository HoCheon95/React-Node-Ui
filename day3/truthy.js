const truthyList = [
    true,           // 1. true 자체
    "A",            // 2. 비어있지 않은 문자열
    " ",            // 3. 공백 문자열
    1,              // 4. 0이 아닌 양수
    -40,            // 5. 0이 아닌 음수
    [],             // 6. 빈 배열
    {},             // 7. 빈 객체
    function(){}    // 8. 함수
];

truthyList.forEach((val, index) => {
    const isTrue = !!val;

    if(val){
        console.log(`${index+1} Truthy 확인 값 : ${val}`);
    } else {
        console.log(`나머지`);
    }
})