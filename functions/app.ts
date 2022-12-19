// any

let hero: string;

function getHero() {
    return "Salman Khan";
}
hero = getHero();

function addTwo(num: number) {
    return num + 2;
}

function getUpperCase(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

// annotate by default
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

signUpUser("Abdullah", "abc@gmail.com", true);

loginUser('sameer', 'abd@gmail.com');

addTwo(4);

getUpperCase("Sameer");


function addTwoNums(num: number): number {
    return num + 2;
}

let addNum = addTwoNums(45);

console.log('Add Two Number :', addNum);

function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    }
    return "200 OK";
}

let getNum = getValue(6);

console.log('Get Number :', getNum);

const getHello = (name: string): string => {
    return name;
}

let greeting = getHello("Sameer");

console.log('Greeting :', greeting);


const heros = ["thor", "spiderman", "ironman"];

// const heros = [1, 2, 3];

heros.map((hero): string => {
    return `hero is ${hero}`
})



function consoleEror(errmsg: string): void {
    console.log("Error :", errmsg);
}

consoleEror('Check Error');

// some function return Never value

// function handleError(err_msg: string): never {
//     throw new Error(err_msg);
// }

// handleError('Error Message');



let singer: (song: string) => string;

singer = function () {
    return "return any String "
}

// anonymous function 
let myadd1 = function (x: number, y: number): number {
    return x + y;
}

// anonymous function with explict type

let myadd2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

///type names dont matter'

let myadd3: (baseValue: number, incrementValue: number) => number = function (x: number, y: number) {
    return x + y;
}

console.log("My Add 3 :===========>", myadd3(45, 25));



// lambda function 
let myadd4 = (a: number, b: number) => a + b;

console.log('My Add4 lambda function', myadd4(24, 5));


type GreetFunction = (a: string) => void;

function greetings(fn: GreetFunction) {
    console.log(fn);
}

greetings(() => "sameer");

export { }