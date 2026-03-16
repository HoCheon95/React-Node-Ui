// 선언 전에 접근 가능 -> undefined 출력
// var 는 선언이 가장 위로 끌어올려 진다(호이스팅)
// 하지만 값 할당은 뒤에서 이루어진다.
console.log(`varSample1 : ${varSample}`); // undefined 초기화는 안됨.
var varSample = 100;
console.log(`varSample2 : ${varSample}`);
