class Sonar {
    ping() {
        console.log("ping");
    }
}
class Ball {
    ping() {
    }
    pong() {
        console.log("pong");
    }
}
class NameChecker {
}
class C {
    x = 0;
}
// y does not exit on type C;
const css = new C();
css.x;
class Base {
    greet() {
        console.log('Hello World');
    }
}
class Derived extends Base {
    // overriding Methods
    greet(name) {
        if (name === undefined) {
            super.greet(); // This Method Is calling Base Clas
        }
        else {
            console.log(`Hello ${name.toUpperCase()} `);
        }
    }
}
const d = new Derived();
d.greet();
d.greet("Sameer");
// Alias the derived instance through a base class
const b = d;
b.greet();
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters} m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof!');
    }
    move(distanceInMeters = 45) {
        console.log('Running ......');
        super.move(distanceInMeters);
    }
}
const dg = new Dog('Puppi');
dg.move();
console.log(dg.move());
export {};
