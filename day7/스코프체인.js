/**
 * 스코프 체인의 기본 흐름
 * 내부(블록) -> 외부(지역) -> 전역
 */
let a = 1;

function outer() {
    let b = 2;

    function inner() {
        let c = 3;
        console.log(c,b,a);
    }
    inner();
}

outer(); // 3 2 1
// 위 코드에서 변수 탐색 순서는
// c -> b -> a 가 된다.


/**
 * 내부 함수에서 외부 변수 사용
 */
function makePlus(n) {
    return function(x) {
        return x + n; // 외부 함수의 변수 n을 참조
    };
}

const add = makePlus(5); // n = 5

console.log(add(10)); // x = 10
// 내부 함수가 외부 함수의 변수 n에 접근 -> 스코프 체인 덕분


/**
 * 동일한 변수 이름이 겹칠 때 예시 (블록 스코프에 의해 가장 가까운 변수가 우선이다.)
 */
let x = 1;

function test() {
    let x = 2; // 주석이 될 경우 전역 x변수에 접근 한다
    console.log(x);
}

test(); // 2

// 안쪽 스코프가 바깥 변수 가리는 현상 : 쉐도잉(shadowing)


/**
 * 같은 이름이 여러 depth일 때
 */
let y = 1;

function a1(){
    let y = 2;
    function b() {
        let y = 3;
        console.log(y);
    }
    b();
}
a1(); // 3
// 안쪽에서 바깥쪽으로 변수를 탐색하되 안쪽에 변수가 이미 있고 바깥쪽에 변수가 또 있다해서 값을 덮어쓰진 않는다.
// 따라서 가장 가까운 곳에 있는 변수의 값이 할당된다.





// var는 블록 스코프를 무시한다 -> 함수 스코프 기준
if(true) {
    var vv = 1;
}

console.log(vv);