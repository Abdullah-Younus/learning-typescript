
const User = {
    name: "Abdullah",
    email: 'abdullah@gail.com',
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }

let newUser = { name: 'Khan', isPaid: false, email: 'hh@gmail.com' }

createUser(newUser);



function createCourse(): { name: string, price: number } {
    return { name: 'Sameer', price: 452 }
}

createCourse()



/// aliese 

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function creasteUser(user: User): User {
//     return { name: "", email: "", isActive: true }
// }

// creasteUser({ name: "", email: "", isActive: true });


type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: 'Sameer',
    email: 'kk@gmail.com',
    isActive: false
}


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
};









myUser.name = "Sameer";
myUser.email = "kk@gmail.com";
myUser.isActive = true;




export { }