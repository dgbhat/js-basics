
/* 2. Appending array
*
*  */
const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d", "e", "f"]; // ["a", "b", "c", "d", "e", "f"]
// VS //
const arr1 = ["a", "b", "c"];
const arr2 = [arr1, "d", "e", "f"]; // [["a", "b", "c"], "d", "e", "f"]


/* 3. Appending Object
*
* */
const obj1 = {a: 1, b: 1, c: 1}
const obj2 = {d: 1, ...obj1}; // { d: 1, a: 1, b: 1, c: 1 }
//VS//
const obj1 = {a: 1, b: 1, c: 1}
const obj2 = {d: 1, obj1}; // { d: 1, obj1: { a: 1, b: 1, c: 1 } }


/* 4. Destructuring Array with Spread op
*
* */
const [num, ...subArr] = [1,2,3,4,5];
console.log(num); // 1
console.log(subArr); // [2, 3, 4, 5]

/* 5. Destructuring Object with Spread op
*
* */
const {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

const w = {x, y, ...z};
console.log(w); // { x: 1, y: 2, a: 3, b: 4 }

/* 6. Spread op in Functions
*
* */
// Spread op in argument
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
sum(...numbers); // 6

// Spread op in parameter
function myFunc(x, y, ...params) {
    console.log(x); // "a"
    console.log(params) // ["c", "d", "e", "f"]
}
myFunc("a", "b", "c", "d", "e", "f")


//https://github.com/mbeaudru/modern-js-cheatsheet#explanation-1