"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    x;
    y;
}
const pt = new Point();
pt.x = "45";
pt.y = "Abdullah";
class BasGreeter {
    name = "Sameer";
    constructor() {
        this.name = "hello";
    }
}
const obj1 = new BasGreeter();
console.log('Obj ====>', obj1); // print constructor value
// definite assignment assertion operator !
class OkGreeter {
    name;
}
const obj2 = new OkGreeter();
obj2.name = "Khan";
console.log('Obj2 =======>', obj2.name);
class Student {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFirstName() {
        console.log("My First Name Is :" + this.firstName);
        console.log("My Age :" + this.age);
    }
    getSecondName(arg) {
        console.log('My parameter is :', arg);
    }
}
const obj6 = new Student("sameer", "khan", 45);
obj6.getFirstName();
obj6.getSecondName("45");
