// 콜백으로 객체 메서드를 전달하면 this 문제 발생

let userData = {
    name: "나여",
    setName:function(firstName, lastName) {
        // this.name을 firstName + lastName 으로 변경
        // this 는 함수 호출 방식에 따라 결정됨
        this.name = firstName + lastName;
        console.log(this.name);
    }
}

// 콜백으로 setName 메서드를 전달
function getUserName(firstName, lastName, callback) {
    callback(firstName, lastName);
}

// 콜백 실행
/*
getUserName 호출시 userData.setName을 넣는 순간, javascript는 userData라는 주소지에 가서 setName이라는 함수만 쏙 빼온다.
이 때, 이 함수가 userData 객체 내에 있다는 연결 고리는 끊어진다.
*/

// getUserName("홍", "길동", userData.setName);

// 해결책 1. bind 사용
// getUserName("홍", "길동", userData.setName.bind(userData));

// 해결책 2. 화살표 함수
getUserName("홍", "길동", (f,l) => userData.setName(f,l));

// ** 정리 : 객체의 함수를 인자형태로 콜백으로 넘겨줄 때 this가 필요하다면 .bind(객체명) 또는 화살표 함수를 사용하여만 한다

console.log(userData.name);