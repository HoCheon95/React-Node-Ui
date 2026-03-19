/**
 * 문제 1. 카운터 함수 만들기
 * 
 * 다음 조건을 만족하는 createCounter() 함수를 작성하세요.
 * 
 * 요구사항
 * 1) createCounter()는 내부적으로 count = 0 을 가진다
 * 2) 호출할 때마다 count가 1증가한다
 * 3) 증가된 값을 반환한다 -> 콘솔에 출력
 * 
 * 실행 예시
 * const counter = createCounter();
 * console.log(counter()); // 1
 * console.log(counter()); // 2
 * console.log(counter()); // 3
 */

function createCounter(){
    let count = 0;

    return function() {
        count++;
        console.log(count);
        return count;
    }
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

/**
 * 문제 2. 은행 계좌 만들기
 * 
 * 다음 조건을 만족하는 createAccount() 함수를 작성하세요
 * 
 * 요구사항
 * 
 * 1) 은행 계좌에 balance = 0 을 가진다
 * 2) deposit(amount) -> 금액 추가
 * 3) withdraw(amount) -> 금액 차감
 * 4) 외부에서 balance에 직접 접근은 못 한다
 * 
 * 
 * 실행 예시
 * 
 * const myAccount = createAccount();
 * 
 * console.log(myAccount.deposit(1000)) // 입금 후 잔액 : 1000
 * console.log(myAccount.withdraw(300)) // 출금 후 잔액 : 700
 * console.log(myAccount.withdraw(1000)) // 잔액 부족!
 */

function createAccount() {
    let balance = 0;

    return {
        deposit(amount){
            balance += amount;
            return `입금 후 잔액: ${balance}`;
        },
        withdraw(amount){
            if(balance < amount) {
                return `잔액 부족!`;
            }
            balance -= amount
            return `출금 후 잔액 : ${balance}`;
        }
    }
}

const myAccount = createAccount();
console.log(myAccount.deposit(100));
console.log(myAccount.withdraw(100));
console.log(myAccount.withdraw(100));


/**
 * 문제 3. 예약 목록에 노래 추가하기
 * 
 * 노래방 예약 목록(배열)을 클로저로 관리하는 함수를 작성하세요
 * 
 * 요구사항
 * 1) createPlaylist() 함수
 * 2) 내부에 songs = [] 배열 보관
 * 3) add(song) -> 목록에 추가
 * 4) getList() -> 전체 목록 반환
 * 
 * 실행 예시
 * const playlist = createPlaylist();
 * 
 * playlist.add("사랑했지만");
 * playlist.add("응급실");
 * console.log(playlist.getList());
 * // ["사랑했지만", "응급실"]
 */

function createPlaylist() {
    let songs = [];

    return {
        add(song){
            songs.push(song);
        },
        getList(){
            return songs;
        }
    };
}

const playlist = createPlaylist();
playlist.add("사랑했지만");
playlist.add("응급실");
console.log(playlist.getList());