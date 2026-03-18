const scores = [80,[90,95],100];

// scores[1] 내의 두 점수를 꺼내고 싶을 때
// const[math, [eng,sci], korean] = scores;

// console.log(math,eng,sci,korean);

// 객체 중첩 구조분해 예시
const students = {
    name:"이름",
    age:20,
    scores:{
        math:90,
        eng:86,
        science:98
    }
};

const {name, scores:{math,eng,science}} = students;

console.log(name, math, eng, science);
// console.log(scores); // 중첩 객체를 직접 뽑아낼 수는 없다.

// 배열 + 객체 중첩 구조분해 예시
const students2 =[
    {name:"이름1", scores2:{math:90, eng:85}},
    {name:"이름2", scores2:{math:22, eng:35}},
];

// 첫번째 학생의 점수 추출
const[{name:firstName, scores2:{math:firstMath, eng:firstEng}}] = students2;

console.log(firstName, firstMath, firstEng);

// 문제 1. 학생 배열에서 영어 점수만 추출
const students5 = [
    {name5:"Alice", scores5:{math5:90, eng5:85}},
    {name5:"Bob", scores5:{math5:80, eng5:75}},
];

const[{scores5:{eng5}}, {scores5:{eng5:eng6}}] = students5;
console.log(eng5, eng6);

// 함수 매개변수에 필요한 데이터만 추출할 때
function intro({name,gender}){
    console.log(`이름:${name}, 성별:${gender}`);
}
const person = {name:"한성", age:20, gender:"남자"};
intro(person);

// 배열
function sum([a,b]){
    return a+b;
}
console.log(sum([10,20]));