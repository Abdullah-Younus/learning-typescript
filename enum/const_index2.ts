const enum Color { Red, Green, Yellow }; // start with 0
var c: Color = Color.Red;

console.log("C :========>", c); // answer index number 

const enum Color1 { Red = 1, Green, Blue };
// var colorIndex: string = Color1[2] //Not allowed with const enums


const enum Color2 { Red = 1, Green = 2, Blue = 5 };

console.log("Color2 index:=======>", Color2["Blue"]);
