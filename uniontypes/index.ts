let myname: string | null;

myname = null;

console.log(myname);

myname = "Zia";

console.log(myname);

let myAge: string | number;

myAge = 20; /// norrowing

console.log('My Age :', typeof myAge);

myAge = "Don't Know";

console.log("My Age String :", myAge.toString());

console.log(myAge.toUpperCase());

let newAge = Math.random() > 0.6 ? "Sameer" : 60;

//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "Sameer") {
    newAge.toUpperCase();
}


console.log(newAge);

let age: number | "died" | "unknown";

age = 90; // OK
age = "died" // OK
age = "unknown" // OK


type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = number | string;

