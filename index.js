
// function breakfastOrder(item) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`${item} is ready`)
//         }, 3000);
//     })
// };

// async function Order(item) {
//     const order = await breakfastOrder(item);
//     console.log('Order =====>', order);
// }

// Order("paratha");
// Order("Coffee");

// let counter = 0;

// function incrementCounter(value) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             counter++;
//             resolve(`Value of :${value} Counter :${counter}`)
//         }, 1000);
//     })
// }

// async function asyncFunction(value) {
//     console.log(`value = ${value} Counter = ${counter}`);
//     const resolveedValue = await incrementCounter(value);
//     console.log('Resolved Value :', resolveedValue);
// }

// for (let i = 0; i < 11; i++) {
//     asyncFunction(i)
// }


const allowedPasswords = ["password", "Alexander", "PIAIC"];

/// includes true or false return karta han

function checkPassword(password) {
    return allowedPasswords.includes(password);
}
console.log("=====>", checkPassword("password"));

function validatePassword(password) {
    return new Promise((resolve, reject) => {
        if (checkPassword(password)) {
            reject({
                status: false
            });
        } else {
            resolve({
                status: true
            })
        }
    })
}

function checker(password) {
    validatePassword(password)
        .then(value => {
            console.log('Authorize User');
            console.log('Value ===>', value);
        })
        .catch(value => {
            console.log("Rejected User");
            console.log(value);
        })
}

checker("password");





