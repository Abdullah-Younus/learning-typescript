var myname;
myname = null;
console.log(myname);
myname = "Zia";
console.log(myname);
var myAge;
myAge = 20; /// norrowing
console.log('My Age :', typeof myAge);
myAge = "Don't Know";
console.log("My Age String :", myAge.toString());
console.log(myAge.toUpperCase());
var newAge = Math.random() > 0.6 ? "Sameer" : 60;
//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "Sameer") {
    newAge.toUpperCase();
}
console.log(newAge);
