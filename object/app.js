"use strict";
exports.__esModule = true;
var User = {
    name: "Abdullah",
    email: 'abdullah@gail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: 'Khan', isPaid: false, email: 'hh@gmail.com' };
createUser(newUser);
function createCourse() {
    return { name: 'Sameer', price: 452 };
}
createCourse();
var myUser = {
    _id: "1234",
    name: 'Sameer',
    email: 'kk@gmail.com',
    isActive: false
};
myUser.name = "Sameer";
myUser.email = "kk@gmail.com";
myUser.isActive = true;
