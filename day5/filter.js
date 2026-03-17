// value 만 사용하는 경우
const nums = [1,2,3,4];
//even : 짝수 odd : 홀수
const even = nums.filter(n=>n%2==0);

console.log(nums);
console.log(even);

// value + index 사용하는 경우
const res = nums.filter((value,index) => index%2===1 && value %2===1); // 홀수 index만 추출
console.log(res);

// value+index+array 를 사용하는 경우
const average = nums.reduce((sum,v) => sum+v,0);

const aboveAverage = nums.filter(
    (value,index,array) => value >= average || index > 2
);

console.log(aboveAverage);

// 객체 배열에서 filter 사용
const users = [
    {name:"이름1", age:17},
    {name:"이름2", age:22},
    {name:"이름3", age:19},
];

const adults = users.filter(
    (user) => user.age >= 20
);

console.log(adults);

// 문자열 조건 필터링
const names = ["Kim", "Lee", "Park"];
const longNames = names.filter(name => name.length >= 4);
console.log(longNames);

// names 배열에서 inclues 함수를 사용하여 "ee"가 포함되는 문자열만 추출하여 출력하시오.
const eeWithName = names.filter(name => name.includes("ee"));
console.log(eeWithName);