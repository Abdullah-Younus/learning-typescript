// Named function with optioal and default parameter
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName, lastName = "Khan") {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
let result1 = buildName("Abdullah");
let result2 = buildName("Abdullah", "Bhai");
console.log("Reuslt 1 ====> ", result1);
console.log("Reuslt 2 ====> ", result2);
///anonymous function
//(Note that the parameter type will be optional when used with default value)
let buildName2 = function (firstName, lastName = "kHan") {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
};
let check1 = buildName2("Sameer");
let check2 = buildName2("Bhai Jaan", "Sameer");
console.log("Check1=============> ", check1);
console.log("Check2=============> ", check2);
export {};
