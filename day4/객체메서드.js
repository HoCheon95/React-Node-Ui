// 파라미터가 없는 객체 메서드
const person = {
    name: "이름",
    greet: function(){
        console.log(`안녕 내 이름은 ${this.name} 이야`);
    }
}
person.greet();

console.log("\x1b[31m%s\x1b[0m", "----------");
// 파라미터가 있는 객체 메서드
const person2 = {
    name: "이름2",
    greet2: function(age){
        console.log(`안녕 내 이름은 ${this.name} 이고 나이는 ${age}살 이야`);
    }
}
person2.greet2(11);