//let cant be reinitialized
var a = 1;
let a = 10;
console.log(a); //SyntaxError: Identifier 'a' has already been declared

//OR//

let b = 1;
var b = 100;
console.log(b); //SyntaxError: Identifier 'b' has already been declared

///////////////////////////////
//let and const are block scoped
//var is function or global scoped (depending on if its declared inside a function or outside)
let a = 1
const b = 10
{
    let a = 2
    const b = 200
    console.log(a,b); //2,200
}
console.log(a,b); //1,10

//OR//
let a = 1
const b = 10
{
    a = 2
    const b = 200
    console.log(a,b); //2,200
}
console.log(a,b); //2,10

///////////////////////////////
// var is like static variables in java.
{
    var a = 1;
}
console.log(a);
fn();

function fn() {
    a = 5;
    console.log(a);
}

console.log(a);

//let is like a local variable
{
    let a = 1;
}
console.log(a); //ReferenceError: a is not defined


///////////////////////////////
function f1() {
    console.log(b) //undefined
    console.log(a) //ReferenceError: Cannot access 'a' before initialization
    let a;
    var b;
/*
Scope: Local =>
a: undefined
b: undefined
* */
}
f1()