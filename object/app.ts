
const User = {
    name: "Abdullah",
    email: 'abdullah@gail.com',
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }

let newUser = { name: 'Khan', isPaid: false,email:'hh@gmail.com' }

createUser(newUser);



function createCourse(): { name: string, price: number } {
    return { name: 'Sameer', price: 452 }
}

createCourse()

export { }