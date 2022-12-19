function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
let result = buildName("sameer", "Khan", 56, "safa");
let result2 = buildName("sameer");
console.log("Result =========> :", result);
console.log("Result2 =========> :", result2);
export {};
