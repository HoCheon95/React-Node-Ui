// 1. 카운터를 사용한 기본 반복 (가장 일반적인 형태)
// 루프를 제어하는 변수를 명확히 정의하고, 루프 본문 내에서 이변수의 종료조건을 향해 꾸준히 변화 시켜야 한다.

// 1. 초기화 : 루프 제어 변수 선언 및 초기화
let i = 0;
const TARGET = 5; // 루프 종료 목표 값

console.log("================= 기본 while 루프 시작 =================");

// 2. 조건식 : i 가 TARGET 보다 작을 때까지 반복
while (i < TARGET) {
  console.log(`현재 반복 횟수 : ${i + 1}번 째`);

  // 3. 업데이트 종료 조건(i<TARGET)을 false로 만들 방향으로 변수 값 변경
  // i++가 없으면 무한루프가 발생하게 된다.
  i++;
}
console.log("================= 기본 while 루프 종료 =================");
console.log(`최종 i 값 : ${i}`);

console.log();
console.log();
console.log();
// 2. while 의 break를 사용한 명시적 종료
// 조건이 항상 참인 루프를 설정하고, 내부에서 특정사항이 충족될 때 break 문을 사용하여 루프를 탈출합니다.

let attempts = 1;
const MAX_ATTEMPTS = 3;

console.log("=============== break를 사용한 루프 시작! ===============");
while (true) {
  console.log(`로그인 시도 중... 현재 : ${attempts} 회`);

  if (attempts >= MAX_ATTEMPTS) {
    console.log("최대 시도 횟수에 도달. 루프 종료");
    break;
  }

  attempts++;
}
console.log("=============== break를 사용한 루프 종료! ===============");
console.log(`최종 attempts 값 : ${attempts}`);


console.log();
console.log();
console.log();

// api 호출이란 상황을 가정하여 while 과 break 를 사용하여 5번 시도후 while 문을 빠져나올 수 있도록 코드를 작성해보시오.
let count = 1;
const MAX_COUNT = 5;

console.log("============= break를 사용한 api호출 시작! =============");
while (true){
  console.log(`api 호출 중... 현재 : ${count} 회`);

  if(count >= MAX_COUNT) {
    console.log("최대 시도 횟수에 도달. api 종료");
    break;
  }

  count++;
}
console.log("============= break를 사용한 api호출 종료! =============");
console.log(`최종 count 값 : ${count}`);