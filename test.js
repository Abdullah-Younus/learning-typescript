const data = [4, 5, 6, 1, 2, 3, 4, 1, 1, 2];
let arr = [];

let check = data.filter((item, same, self) => {
    return self.indexOf(item) == same

})
console.log(check);
// console.log(arr);

