// 1) 반환 값이 반드시 boolean 형태이다
// map 처럼 어떤 값이든 반환해도 되지만 filter는 true/false 를 가려내는 게 중요한 목적이다.

// 2) 원본 배열은 바뀌지 않지만 요소가 객체라면 내부 속성은 바뀔 수 있다.
const students = [
    {score:50},
    {score:60},
    {score:70},
];

const newScore = students.filter(s=>{
    s.score += 10;
    return s.score>=70;
});

console.log(newScore);

// 3) 조건을 만족하는 요소가 없으면 빈 배열을 반환한다.
const filtered = students.filter(s=>s>=90);
console.log(filtered);