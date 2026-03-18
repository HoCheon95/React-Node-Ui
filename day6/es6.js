// 객체/배열 구조분해
const user = {name:"이름", age:20};
const{name, age} = user;
console.log(name);
console.log(age);


const a = 10;
const b = 20;

console.log(`10+20 = ${a+b}`);

// 삼항연산자
console.log(`나는 ${a>=30?"성인":"청년"} 입니다.`);

// car 라는 객체를 만들고 brand, name, yaer 속성을 만드세요
// car 객체를 구조분해 하여 변수화 한 후 console 과 삼항연산자를 이용하여 신식/구식을 나누세요
const car = {
    brand: "현대", carName: "그랜저", year: 2025
}
const{brand, carName, year} = car;

console.log(`${brand}의 ${carName}는 ${year>=2026?"신식":"구식"} 입니다.`);
