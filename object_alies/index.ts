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
