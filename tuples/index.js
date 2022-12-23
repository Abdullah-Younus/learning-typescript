// tuples types have the advantage that you can accurately describe the type of an array of mixed types
var tuple = [1, "Sameer"];
var secondElement = tuple[1]; // secondElement now has type 'string'
console.log('Second Elemnet :', secondElement);
// typically an array contain zero to many objects of
// a single type.Typescript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.
// you can create a tuple using javascript's array syntax.
const failingResponse = ["Not Found", 404];
// but you will need to declare its type as a tuple
const passingResponse = ["{}", 200];
// if you hover over the two vaiable names you can see
if (passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log('local Info ===>', localInfo);
}
export {};
