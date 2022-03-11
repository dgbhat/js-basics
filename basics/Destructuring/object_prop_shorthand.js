/* counter to destructuring
*
* when the variable name is the same as the property name, you can do this shorthand
* */

const a = 1, b = 2;
// shorthand
let object1 = {a, b}
console.log(object1); // { a: 1, b: 2 }

// without shorthand
let object2 = {a: a, b: b};

// shorthand vs destructuring//
const object3 = {a, b}
const {x} = {x: 1, y: 2} // x=1
