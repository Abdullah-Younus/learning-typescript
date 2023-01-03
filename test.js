// const data = [4, 5, 6, 1, 2, 3, 4, 1, 1, 2];
// let arr = [];

// let check = data.filter((item, same, self) => {
//     return self.indexOf(item) == same

// })
// console.log(check);
// // console.log(arr);

// function factorial(num) {
//     let result = 1;
//     for (let i = num; i > 0; i--) {
//         result = result * i
//     }
//     return result;

// }
// console.log(factorial(4));

function factorial(x) {
    let result = 1;

    if (x === 0) {
        return 1;
    }

    result = x * factorial(x - 1);
    return result;
}

console.log(factorial(4));

