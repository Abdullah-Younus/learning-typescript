enum Color { Red, Green, Blue }; /// start with 0 like array index


var c: Color = Color.Green /// print index number 1

console.log('C ======>', c);


enum Color1 { Red = 1, Green, Blue };

var colorName: string = Color1[2]; /// print the value of Color

console.log('color Name ====> ', colorName);


enum Color2 { Red = 1, Green = 2, Blue = 4 } // can assign value to all

var colorIndex = Color2["Blue"];

console.log("Color Index :=======>", colorIndex); // print 4
