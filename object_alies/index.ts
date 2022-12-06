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




console.log(student["name"]);