// 객체메서드 this vs 콜백 메서드 this

const outer = {
    name: "Outer Object",

    // *** 일반 함수로 정의된 객체 메서드 ***
    // 호출 시 this = outer 객체
    regularFunc : function() {
        console.log(`regularFunc this : ${this.name}`); // Outer Object
    },

    // 화살표 함수로 정의된 객체메서드
    // 화살표 함수는 this를 자체 생성하지 않음 = 상위 스코프(this) 사용
    arrowFunc: () => {
        console.log(`arrowFunc this : ${this.name}`); // undefined
    },

    // 객체 메서드 내부에서 다른 함수 호출 시 this 비교용 예제
    demo: function() {
        console.log(`demo 시작 this : ${this.name}`); // deom()를 호출한 객체 -> outer
        // Outer ojbect

        // 내부 일반 함수(콜백)
        function innerRegular() {
            console.log(`innerReular this : ${this.name}`); // undefined
        }

        innerRegular();

        // *** 내부 화살표 함수(콜백) ***
        // 화살표 함수는 this를 생성하지 않고 상위 스코프 this를 그대로 사용
        const innerArrow = () => {
            console.log(`innerArrow this : ${this.name}`); // Outer ojbect
        }

        innerArrow();
    }
}

// outer.regularFunc(); // outer 객체의 name 속성 접근
// outer.arrowFunc(); // 우리가 원하는 this 객체에 접근을 하지 못한다.
// 객체 메서드에서 this를 사용할 경우 : 일반 함수
// 객체 메서드 내 콜백함수에서 this를 사용할 경우 : 바깥 함수 : 일반함수 / 내부(콜백)함수 : 화살표함수
outer.demo();
