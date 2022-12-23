class Point {
    x!: string;
    y!: string;
}


const pt = new Point();
pt.x = "45";
pt.y = "Abdullah";


class BasGreeter {
    name: string = "Sameer";

    constructor() {
        this.name = "hello";
    }
}


const obj1 = new BasGreeter();
console.log('Obj ====>', obj1); // print constructor value




// definite assignment assertion operator !

class OkGreeter {
    name!: string;
}

const obj2 = new OkGreeter();
obj2.name = "Khan"
console.log('Obj2 =======>', obj2.name);

class Student {
    firstName: string;
    lastName: string;
    age: number

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFirstName() {
        console.log("My First Name Is :" + this.firstName);
        console.log("My Age :" + this.age);
    }

    getSecondName(arg: string) {
        console.log('My parameter is :', arg);
    }
}

const obj6 = new Student("sameer", "khan", 45);
obj6.getFirstName();
obj6.getSecondName("45");