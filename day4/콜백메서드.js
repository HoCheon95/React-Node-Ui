const counter = {
  count: 0,
  count2: 1,
  increase: function () {
    console.log(`객체 메서드 this ${this.count}`); // 0

    // 일반 함수 콜백
    setTimeout(function () {
      console.log(`콜백 일반 함수 this : ${this.count2}`); // undefined counter 객체 밖의 count2를 바라본다
    }, 500);

    // 화살표 함수
    setTimeout(() => {
        console.log(`콜백 화살표 함수 this : ${this.count2}`); // 1
        this.count++;
        console.log(`count: ${this.count}`); // 1
    }, 500);
  }
}

counter.increase();
