const nums = [1,2,3];
const doubled = nums.map(n=>n*2);

// 원본 배열은 변경되지 않음
console.log(nums);
console.log(doubled);

const nums2 = [10,20,30];
// map을 사용하여 곱하기 3이 된 배열을 추축하세요
const newNums2 = nums2.map(n=>n*3);
console.log(nums2);
console.log(newNums2);

const res = nums.map((value, index, array) => {
  return `${index}번째는 값이 ${value}이다. array는 ${array} 이다.`;
})

console.log(res);

// 문자열 반환
const names = ["kim", "lee"];
const capitalized = names.map(n=>n.toUpperCase());

console.log(capitalized);

// 모든 문자열이 대문자인 배열을 생성하고 map을 사용하여 소문자로 변환 된 배열을 출력하세요.
const names2 = ["KIM", "LEE", "HONG"];
const lowercased = names2.map(n=>n.toLowerCase());

console.log(lowercased);

// 객체 배열에서 특정 속성만 추출
const users = [
    {name:"이름1", age:20},
    {name:"이름2", age:30},
];

const ages = users.map(u=>u.age);

console.log(ages);

// cars 라는 객체 배열을 만들고 brand, year, type 속성을 생성하고 map을 사용하여 year 속성이 배열을 출력하세요.
const cars = [
    {brand:"현대", year:2025, type:"승용차"},
    {brand:"기아", year:2023, type:"SUV"},
    {brand:"쌍용", year:2022, type:"승용차"},
]
const types = cars.map(n=>n.type);

console.log(types);

const years = cars.map(n=>n.year);
console.log(years);

// items.map(item => <li>{item}</li>)

// map은 원본 유지가 원칙이다. 하지만 요소가 객체라면 내부 속성은 수정될 수 있다.
const students = [{score:80}, {score:90}];

students.map(s=>s.score+=10);

console.log(students);