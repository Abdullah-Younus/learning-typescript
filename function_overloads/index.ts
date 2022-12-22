// overloads give us type-checked calls


// its customary to order overloads from most specific to least specific

function add(arg: string, arg2: string): string; // option 1
function add(arg: string, arg2: number): number; // option 2
function add(arg: boolean, arg2: boolean): boolean; // option 3


function add(arg1: any, arg2: any): any {
    return arg1 + arg2
}


console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));

