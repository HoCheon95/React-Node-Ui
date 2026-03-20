console.log("시작"); // 동기

setTimeout(()=>{ // 비동기
    console.log("타이머 종료");
},0);

console.log("끝"); // 동기

/*
1) console.log("시작"); : 콜스택에서 바로 실행
2) setTimeout -> 비동기 함수 이므로 테스크 큐로 이동하여 대기
3) console.log("시작"); : 콜스택에서 바로 실행
4) 콜 스택이 비면 이벤트 루프가 태스크 큐를 확인 -> setTimeout 실행 후 종료
*/