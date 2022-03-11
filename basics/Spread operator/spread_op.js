/* 1. What's spread operator
*  SPREAD OPERATOR SPREADS ALL THE ITERABLE ELEMENTS INTO COMMA SEPARATED ELEMENTS
* */
const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d"]; // ["a", "b", "c", "d"]


/* 2. Places where we use spread op
* (1) Array
* (2) Object
* (3) Function argument/parameter
* */

// Ex1 Array
const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d"]; // ["a", "b", "c", "d"]

// Ex2 Object
const obj1 = {a: 1, b: 1, c: 1}
const obj2 = {d: 1, ...obj1}; // { d: 1, a: 1, b: 1, c: 1 }

// Ex3 Function
function fn(brand, ...models) { /*...*/ }
fn('sam', ['mod1','mod2', 'mod3'])
fn('app', ['mod1','mod2'])
//or//
function fn(a, b, c){/*...*/}
const arr = [1,2,3]
fn(...arr)