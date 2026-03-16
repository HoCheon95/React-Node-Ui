let age = null; // undefined 상태일 때
age = age || 20; // 우측 "기본값" 적용

console.log(age); // 20

// 함수의 매개변수 기본 값 적용 -- 여기서부터 해야됨