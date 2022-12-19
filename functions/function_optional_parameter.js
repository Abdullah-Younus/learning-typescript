// Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
let result1 = buildName("Sameer"); // second parameter optional
// let result2 = buildName("Sameer", "Khan", "khan"); // error
let result3 = buildName("Sameer", "Khan"); // second parameter assign
/// anonymous function 
var buildName1 = function (firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
};
export {};
