// These two interfaces are completely
// transferrable in a sturctural type system:

interface Ball {
    diameter: number
}

interface Sphere {
    diameter: number
}

let ball: Ball = { diameter: 45 };
let sphere: Sphere = { diameter: 15 };

sphere = ball;
ball = sphere;

// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.

// TypeScript is comparing each member in the type against
// each other to verify their equality.
console.log('Ball ====>', ball);
console.log('Sphere ====>', sphere);

interface Tube {
    diameter: number;
    lenght: number;
}

let tube: Tube = { diameter: 12, lenght: 10 };


//tube = ball // error
console.log('Tube ===>', tube);

let myTypes = { name: 'Zia', id: 56 };

//Case 1 
myTypes = { id: 2, name: 'Tom' } //Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type

// Case 2
// myTypes = { id: 2, name_person: "Tom" } // Case 2a: Error, renamed or missing property

//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };// /Note now 'x' can have any name, just that the property should be of type string

x = { id: 45, fullName: "Sameer", lastname: "asdfasf", age: "asfdgasdfasd" }; // OK, `fullName` matched by index signature


//Case 3b
myTypes = { id: 45, name: "Tom" };

//Case 


