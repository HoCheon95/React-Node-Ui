// 배열 구조분해
// [] 대괄호 사용
// 순서대로 값이 변수에 할당

const arr = [10,20,30];
const[a,b,c] = arr;

console.log(a,b,c);

// 배열에서 값 생략 예시
const arr2 = [10,20,30,40];

// 두 번째 값만 필요 없을 때
const[first,, third, fourth] = arr2;
console.log(first, third, fourth); // 필요 없는 값은 변수에 담지 않고 , 로 생략 가능

// 기본 값 지정 예시
const[x,y,z=100] = [1,2];
console.log(x,y,z);

// 객체 구조분해
// {} 중괄호 사용
// 키 이름과 변수 이름이 동일해야 매칭이 가능하다

const person = {name:"이름", age:20};
const{name, age} = person;

console.log(name, age);

// 변수 이름 변경 가능
const{name:userName, age:userAge} = person;
console.log(userName, userAge);

// 기본 값 지정 가능
const {name:name3, gender="여자"} = person;
console.log(name3, gender);