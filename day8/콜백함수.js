function finishWork(a, b, callback) {
    console.log("일을 끝냈다!!!");
    console.log(a+b);
    // 일을 끝낸 뒤, 전달받은 콜백함수 실행
    callback();
}

function playGame() {
    console.log(`이제 게임을 한다!!!`);
}

finishWork(1,2, playGame);


/*
익명의 함수 사용 가능
 */ 
function greeting(name, callback) {
    console.log(`안녕하세요 ${name} 님!`);

    callback();
}

greeting("한성", function() {
    console.log(`반가워요!`);
});


/*
코드를 순서대로 실행하고 싶을 때 사용
파일을 다 읽은 후 화면에 표시하기(비동기 상황을 가정)
*/
function readFile(callback) {
    console.log(`파일을 읽는 중 입니다...`);

    // 2초 뒤 파일 읽기 완료
    setTimeout(() => {
        console.log(`파일 읽기 완료`);
        callback(); // 파일 읽기가 끝난 후 콜백 실행
    }, 2000);
}

function showContent() {
    console.log("화면에 파일 내용을 표시합니다");
}

readFile(showContent);


/*
특정 조건에서만 실행 가능한 예시
 */
function checkNum(num, callback) {
    if(num > 10) { // 조건 만족 시에만 콜백을 실행한다
        callback(num);
    } else {
        console.log(`콜백 실행 조건 미충족!`);
    }
}

checkNum(15, function(n){
    console.log(n + "는 10보다 크기 때문에 콜백이 실행 된다!");
});
checkNum(5, function(n){
    console.log(n + "는 5보다 작기 때문에 콜백이 실행 안됨!");
});


/*
콜백 지옥
에러처리와 유지보수가 어렵다
*/
setTimeout(()=>{
    console.log("1초 후 작업 1 완료");

    setTimeout(()=>{
        console.log("1초 후 작업 2 완료");
    }, 2000);

    setTimeout(()=>{
        console.log("1초 후 작업 3 완료");
    }, 3000);
}, 1000);


/*
콜백 함수 이름 잘 짓기
좋은 예 : 함수와 역할을 바로 알 수 있는 함수명 사용
 */
function fetchData(onSuccess, onError) {
    
}

function fetchData2(a, b) {

}


/*
콜백을 호출하지 않는 실수
*/
function processData(data, callback) {
    console.log(`데이터 처리 완료!! 신난다!!${data}`);
}