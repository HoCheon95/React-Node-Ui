// 서로 다른 데이터 저장 시 사용
const user = {
    id: 1,
    name: "이름",
    isStudent: true,
    hobbies: ["독서", "운동"]
};

// API 응답 데이터
const students = [
    {name: "이름1", score:80},
    {name: "이름2", score:90},
    {name: "이름3", score:100},
];

// new Object() 방식으로 객체 선언
const car = new Object();
car.brand = "현대";
car.year = 2020;

// 중첩 객체 및 배열
const classroom = {
    className : "405호",
    students: [
        {name: "이름1", score:80},
        {name: "이름2", score:90},
    ]
};

console.log(classroom.students[1].name);
console.log(classroom.students[1].score);

// 객체 주요 메서드
// 1) Object.keys() -> 객체의 키 배열 반환
const keys = Object.keys(car);
console.log(keys);

// 2) Object.values() -> 객체의 값 배열 반환
const values = Object.values(car);
console.log(values);

// 3) Object.entries() -> [키, 값] 쌍 배열 반환
const entries = Object.entries(car);
console.log(entries);

// 문제 1 : 자신의 이름, 나이, 취미를 객체로 만들어 콘솔에 출력하세요.
const myself = {
    name: "김호천",
    age: 31,
    hobby: "개발"
};
console.log(Object.entries(myself));

// 문제 2 : 객체에 새로운 속성 job : "student"를 추가하고 전체 객체를 출력하세요.
myself.job = "student";

console.log(Object.entries(myself));