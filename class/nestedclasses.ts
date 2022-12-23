class Base {
    person_name = "Abdullah";
}

class Drived extends Base {
    constructor() {
        super();
        /// Prints a wrong value in ES5; throws exceptions
        console.log(this.person_name);
    }
}

const obj = new Drived();

console.log('Obj =====>', obj);


// Methods

class Pointlable {
    x = 2;
    y = 4;

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    } 
} 

const objjjjj = new Pointlable();
objjjjj.scale(2);
console.log('Obj x', objjjjj.x);
console.log('Obj y', objjjjj.y);




