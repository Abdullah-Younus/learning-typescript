"use strict";
// let x: number = 0;
Object.defineProperty(exports, "__esModule", { value: true });
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
class Thing {
    _size = 0;
    get size() {
        return this._size;
    }
    set size(value) {
        let num = Number(value);
        // Don't allow NaN, Infinity Etc.
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}
const obj3 = new Thing();
console.log('obj====>', obj3._size);
console.log('obj====>', obj3.size = 65);
