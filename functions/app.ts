// any

let hero: string;

function getHero() {
    return "thore";
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






export { }