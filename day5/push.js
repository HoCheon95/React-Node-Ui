const students = ["학생1", "학생2", "학생3"];

// 새로운 변수에 push를 하게 되면 길이만 결과 값으로 나온다.
const newStudents = students.push("학생4");

console.log(`students : ${students}`);  // 학생1,학생2,학생3,학생4
console.log(`newStudents : ${newStudents}`); // 4

// 새 데이터를 배열 끝에 추가하고 싶을 떄
// 예 : 사용자 입력 값, 서버에서 받아온 데이터, 점수 기록 등

// 여러 요소를 한 번에 추가하고 싶을 때
const colors = ["red", "green"];
colors.push("pink", "black");
console.log(colors);

// 반복문과 함께 사용할 때
// 동적으로 값을 배열에 추가할 수 있음
const nums = [];
for (let i = 0; i<=5; i++){
    nums.push(i); // 1, 2, 3, 4, 5 순서대로 추가가 된다.
}
console.log(nums);

// concat을 사용하면 원본 배열을 변경하지 않는다
const arr = [1,2,3,4];
const newArr = arr.concat(5,6,7);

console.log(arr);
console.log(newArr);

// 문제 1 : 빈 배열 과일바구니를 만들고, "사과", "바나나", "오렌지", "포도"를 순서대로 push로 추가한 뒤, 배열을 출력하세요.
const fruits = [];
fruits.push("사과");
fruits.push("바나나");
fruits.push("오렌지");
fruits.push("포도");

console.log(fruits);

// 문제 2 : 빈 배열 학생점수를 만들고, 88, 92, 79, 85 점수를 순서대로 concat 으로 추가한 뒤 새배열에 담아주고, 원번 배열과 새배열을 출력하세요.
const arrNum = [];
arrNum.concat(88, 92, 79, 85);
console.log(arrNum);