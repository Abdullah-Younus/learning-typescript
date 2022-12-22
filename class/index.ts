import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

const Stop = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    })
}


async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Let's Start University Project`);
    await Stop();
    rainbowTitle.stop();
}


await welcome();

let Teachers: string[] = ["Sir Zia", "Daniyal Nagori", "Zeeshan Hanif"];
let Students: string[] = ["Sameer", "Abdullah", "Daniyal"];


class University {
    name: string[];
    department: string[];
    address: string[];
    constructor(name: string[], address: string[], department: string[]) {
        this.name = name;
        this.address = address;
        this.department = department;
    }
}


class Human {
    name: string[];
    age: number[];

    constructor(name: string[], age: number[]) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Human {
    rollNo: number[];
    constructor(name: string[], age: number[], rollNo: number[]) {
        super(name, age);
        this.rollNo = rollNo;
    }
}
class Teacher extends Human {
    subject: string[];
    constructor(name: string[], age: number[], subject: string[]) {
        super(name, age);
        this.subject = subject
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



