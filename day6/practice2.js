// 문제 1
// 서로 다른 속성을 가진 두 개의 객체를 생성하여 병합하고 출력하시오. (스프레드 연산자 사용)
const obj1 = { name: 20, age: 12 };
const obj2 = { addr: { zopcode: 1234 } };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3); // { name: 20, age: 12, addr: { zopcode: 1234 } }

// 두 개의 배열을 생성하여 병합하고 출력하시오. (스프레드 연산자 사용)
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// 중첩 객체가 있는 객체 2개를 만들어서 병합하고 중첩객체의 속성을 변경해서 출력하시오.
const Obj1 = { 
    a: 1, 
    b: { 
        c: 2, 
        d: 3 
    } 
};
const Obj2 = { 
    e: 4, 
    f: { 
        g: 5, 
        h: 6 
    } 
};
Obj1.b.c = 100;
const Obj3 = { ...Obj1, ...Obj2 };

console.log(Obj3); // { a: 1, b: { c: 100, d: 3 }, e: 4, f: { g: 5, h: 6 } }

// JSON.parse(JSON.stringify(obj1)) 사용하여 깊은 복사 실습
const o1 = { 
    a: 1, 
    b: { 
        c: 2, 
        d: 3 
    } 
};
const o2 = JSON.parse(JSON.stringify(o1));

o2.b.c = 100;
console.log(o1);
console.log(o2);

// 문제 1 - push
// 설명 : 배열에 새로운 요소를 추가

const fruits = ["apple", "banana"];
// 배열 끝에 "orange"를 추가하세요
fruits.push("orange");
console.log(fruits);

// 문제 2 - map
// 설명 : 배열 각 요소를 변환하여 새로운 배열 생성

const scores = [70,80,90];
// 각 점수를 10점씩 올린 새로운 배열 updateScores를 만드세요
const updateScores = scores.map(s=>s+10);
console.log(updateScores);

// 문제 3 - filter
// 설명 : 조건에 맞는 요소만 추출
const students = [
    { name: "Alice", score: 80},
    { name: "Bob", score: 60},
    { name: "Charlie", score: 90},
];
// 70점 이상 학생만 추출하여 passed 배열에 저장하세요
// 출력 예시
[
    { name: "Alice", score: 80},
    { name: "Charlie", score: 90}
]
const passed = students.filter(s=>s.score>=70);
console.log(passed);

// 문제 4 - reduce
// 설명 : 배열 요소를 누적하여 단일 값 계산
const numbers = [10,20,30,40];
// 모든 숫자의 합을 total에 계산하세요

const total = numbers.reduce((arr, cur) => arr+cur,0);
console.log(total);