// anonymous

let teacher: { name: string, exp: number } = {
    name: 'ZeeShan',
    exp: 10
}


// console.log('anonymous ==>', teacher);

/// Alised Object Types

type Student = {
    name: string;
    age?: number
}

// age is an optional You can pass or not

let student: Student = {
    name: 'Sameer Khan'
}

let student2: Student = {
    name: 'Abdullah',
    age: 45
}


console.log(student["name"]);
console.log(student2["age"]);


// Interface

interface Manager {
    name: string,
    subOrdiate?: number
}

let storeManager: Manager = {
    name: 'Bilal'
}


console.log('Store Manager :', storeManager);


type FirstNameLastName = {
    first: string;
    last: string;
}

const hasBoth: FirstNameLastName = {
    first: "Sameer",
    last: "Khan"
}


type Poet = {
    born: number;
    name: string;
}

const PoetMatach: Poet = {
    born: 45,
    name: 'Sameer'
}

// const extraProperty: Poet = {
//     activtiy: "Programmer",
//     born: 745,
//     name: "Khan"
// }

const existinObject = {
    activtiy: "Walking",
    born: 45,
    name: "Sameer"
}

const extraProperty: Poet = existinObject;


// Nested Objects

type Writer = {
    author: {
        firstName: string;
        lastName: string;
    }
    name: string;
}


