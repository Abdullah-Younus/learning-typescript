// Named function with optional parameters


function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName
    } else {
        return firstName;
    }
}

let result1 = buildName("Sameer"); // second parameter optional
// let result2 = buildName("Sameer", "Khan", "khan"); // error
let result3 = buildName("Sameer", "Khan"); // second parameter assign


/// anonymous function 
var buildName1: (firstName: string, lastName?: string) => string = function (firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName
    } else {
        return firstName;
    }
}




