import chalkAnimation from 'chalk-animation';
const Stop = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Let's Start University Project`);
    await Stop();
    rainbowTitle.stop();
}
await welcome();
let Teachers = ["Sir Zia", "Daniyal Nagori", "Zeeshan Hanif"];
let Students = ["Sameer", "Abdullah", "Daniyal"];
class University {
    name;
    department;
    address;
    constructor(name, address, department) {
        this.name = name;
        this.address = address;
        this.department = department;
    }
}
class Human {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Human {
    rollNo;
    constructor(name, age, rollNo) {
        super(name, age);
        this.rollNo = rollNo;
    }
}
class Teacher extends Human {
    subject;
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}
// let StudentName = await inquirer.prompt([
//     {
//         type: "list",
//         name: "student",
//         message: "Select Student",
//         choices: Student
//     }
// ]);
// class human
