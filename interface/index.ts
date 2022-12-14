interface Pingable {
    ping(): void
}

class Sonar implements Pingable {
    ping() {
        console.log("ping");
    }
}

class Ball implements Pingable {
    ping(): void {

    }

    pong() {
        console.log("pong");

    }
}


//  cautions 


interface Checkable {
    check(name: string): boolean
}

class NameChecker implements Checkable {
    // check(s) {
    //     return s.toLowerCase() === "ok"
    // }

}

interface A {
    x: number;
    y?: number;
}

class C implements A {
    x = 0;
}
// y does not exit on type C;

const css = new C();
css.x


class Base {
    greet() {
        console.log('Hello World');
    }
}

class Derived extends Base {

    // overriding Methods
    greet(name?: string) {
        if (name === undefined) {
            super.greet(); // This Method Is calling Base Clas
        } else {
            console.log(`Hello ${name.toUpperCase()} `);
        }
    }
}


const d = new Derived();
d.greet();
d.greet("Sameer");

// Alias the derived instance through a base class

const b: Base = d;

b.greet();


class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters} m.`);
    }
}

class Dog extends Animal {

    bark() {
        console.log('Woof!');
    }

    move(distanceInMeters = 45) {
        console.log('Running ......');
        super.move(distanceInMeters)
    }
}

const dg = new Dog('Puppi');
dg.move();

console.log(dg.move());
