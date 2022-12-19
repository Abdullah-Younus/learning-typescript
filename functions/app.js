// any
let hero;
function getHero() {
    return "thore";
}
hero = getHero();
function addTwo(num) {
    return num + 2;
}
function getUpperCase(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
// annotate by default
let loginUser = (name, email, isPaid = false) => {
};
signUpUser("Abdullah", "abc@gmail.com", true);
loginUser('sameer', 'abd@gmail.com');
addTwo(4);
getUpperCase("Sameer");
function addTwoNums(num) {
    return num + 2;
}
let addNum = addTwoNums(45);
console.log('Add Two Number :', addNum);
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
let getNum = getValue(6);
console.log('Get Number :', getNum);
const getHello = (name) => {
    return name;
};
let greeting = getHello("Sameer");
console.log('Greeting :', greeting);
const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleEror(errmsg) {
    console.log("Error :", errmsg);
}
consoleEror('Check Error');
// some function return Never value
function handleError(err_msg) {
    throw new Error(err_msg);
}
handleError('Error Message');
export {};
