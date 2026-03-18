/**
 * reduce 콜백 함수 매개변수
 *
 * 1. accumulator : 누적 값
 * 2. currentValue : 현재 처리 중인 요소
 * 3. index : 현재 요소 인덱스(순서)
 * 4. array : 원본 배열
 * 5. initiaValue : 누적 값 초기 값
 */

// 기본 합계 예시
const nums = [10, 20, 30, 40];

// 누적값(acc)과 현재 값(cV), initalValue(acc의 초기값)을 사용
const sum = nums.reduce((acc, current) => acc + current, 0); // 인자값 3개 (0포함)

console.log(sum); // 100

// 숫자 합계 누적 과정 출력 예시
const sum2 = nums.reduce((acc, cur, index)=>{
    console.log(`index${index}: acc=${acc}, cur=${cur}`);
    const newAcc = acc+cur;
    console.log(`새로운 누적 값 = ${newAcc}`);
    return newAcc;
},0);

console.log(`최종 합계 : ${sum2}`); // 100

// index 활용 예시
// 인덱스를 사용하여 짝수 인덱스 요소만 합산
const sumEvenIndex = nums.reduce((acc, cur, index)=>{
    if(index %2===0){
        return acc+cur;
    } else {
        return acc;
    }
},0);

console.log(sumEvenIndex);//40

// array 매개 변수 활용 예시
const scores = [80,90,70,60];

const average = scores.reduce((acc, cur, index, array)=>{
    acc += cur;
    if(index === array.length-1){
        return acc/array.length; // 마지막 요소에서 평균 계산
    }
    return acc;
},0);


const average2 = scores.reduce((acc, cur, index, array)=>{
    console.log(`index${index}: acc = ${acc}, cur = ${cur}`);
    acc += cur;
    if(index === array.length-1){
        console.log(`마지막 요소에서 평균 계산 = ${acc/array.length}`);
        return acc/array.length; // 마지막 요소에서 평균 계산
    }
    console.log(`누적 합계 = ${acc}`);
    return acc;
},0);
console.log(average2); // 75

// 객체 집계 예시
const votes = ['A', 'B', 'A', 'C', 'B', 'A'];

const voteCount = votes.reduce((acc, vote)=>{
    acc[vote] = (acc[vote]||0)+1;
    return acc;
},{});

console.log(voteCount); // { A: 3, B: 2, C: 1 }

// 숫자 곱 예시
const multi = nums.reduce((acc, cur) =>{
    return acc*=cur;
},1);

console.log(multi); //240000

// 최대값 / 최소값
const max = nums.reduce((acc, cur)=>(cur > acc? cur : acc),nums[0]);

const min = nums.reduce((acc, cur)=>(cur < acc? cur : acc),nums[0]);

console.log(max); // 40
console.log(min); // 10

// 중괄호 사용 시 무조건 return 을 사용해야 값이 반환된다
const multi3 = nums.reduce((acc, cur) =>{return acc*cur},1);

console.log(multi3);

// 초기 값이 없으면 첫 요소가 acc

// 원본 배열은 바뀌지 않지만 객체 참조 주의
const objs = [{x:1}, {x:2}];
const res = objs.reduce((acc,o)=>{
    o.x +=1;
    return acc+o.x;
},0)
console.log(objs);