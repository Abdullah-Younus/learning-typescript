function buildName(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}


let result = buildName("sameer", "Khan", "safa");
let result2 = buildName("sameer");

console.log("Result =========> :", result);
console.log("Result2 =========> :", result2);


// anonymous function 

var buildNameFun: (fname: string, ...rest: string[]) => string =
    function (firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }