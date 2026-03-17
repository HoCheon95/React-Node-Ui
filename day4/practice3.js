/*
문제 1 : BMI 계산 함수 만들기
1) 함수 이름 : calculateBMI
2) 매개변수 : weight(kg), height(cm)
3) BMI 계산 공식 적용 : BMI = 체중(kg) / (키(m) * 키(m)) 
4) 결과 값은 소수점 2자리까지 제함
5) 결과 출력 예시 : BMI : 22.67
 */
function calculateBMI (weight, height) {
    let BMI = weight / (height/100 * height/100)
    return BMI.toFixed(2);
}

// console.log(calculateBMI(60, 170));
// console.log("\x1b[31m%s\x1b[0m", "----------");
/*
문제 2 : BMI 상태 판정 함수 만들기
1) 함수 이름 : getBMIStatus
2) 매개 변수 : BMI 수치
3) 상태 기준
|   BMI 범위   |   상태    |
|--------------|-----------|
|18.5 미만     |  저체중   |
|18.5 ~ 24.9   |    정상   |
|25 ~ 29.9     |과체중     |
|30 이상       |비만       |
*/


function getBMIStatus(mybmi){
    let message;
    if (mybmi >= 30) {
        return message = "비만";
    } else if (mybmi >= 25 && mybmi < 30){
        return message = "과체중";
    } else if (mybmi >= 18.5 && mybmi < 25){
        return message = "정상";
    } else {
        return message = "저체중";
    }
}



/*
문제 3 : 사용자 값으로 BMI 계산 후 상태 출력
1) 사용자 변수 : weight = 67,
height = 172
2) 문제 1, 2 의 함수를 연쇄 호출
3) 결과 예시
BMI : 22.60
상태 : 정상
*/

let mybmi = calculateBMI(67,172);
console.log(`BMI : ${mybmi}`);
console.log(`상태 : ${getBMIStatus(mybmi)}`);
console.log("\x1b[31m%s\x1b[0m", "----------");