"use strict";
// any
exports.__esModule = true;
var hero;
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
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("Abdullah", "abc@gmail.com", true);
loginUser('sameer', 'abd@gmail.com');
addTwo(4);
getUpperCase("Sameer");
function addTwoNums(num) {
    return num + 2;
}
var addNum = addTwoNums(45);
console.log('Add Two Number :', addNum);
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getNum = getValue(6);
console.log('Get Number :', getNum);
var getHello = function (name) {
    return name;
};
var greeting = getHello("Sameer");
console.log('Greeting :', greeting);
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
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
