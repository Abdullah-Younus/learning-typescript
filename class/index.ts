class Point {
    x!: string;
    y!: string;
}


const pt = new Point();
pt.x = "45";
pt.y = "Abdullah";


class BasGreeter {
    name: string = "Sameer";

    constructor() {
        this.name = "hello";
    }
}


const obj1 = new BasGreeter();
console.log('Obj ====>', obj1); // print constructor value







