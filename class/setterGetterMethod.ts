// let x: number = 0;

// class C {
//     x: string = "hello";

//     m() {
//         x = "world Clas";
//     }

// }

// Getters Setters

// Classes can also have accessors:

class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
const getterSetterObj = new C();
console.log('gettergetterObj.length ====>', getterSetterObj.length);
console.log('getterSetterObj.length ====>', getterSetterObj.length = 45);


