let message: string = 'Hello World';
let userName: string = "Abdullah";

let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);

console.log('Message :', message);

console.log('UserName :', userName);

let user = {
    name: 'Abdullah',
    age: 18
}

console.log('User :', user);