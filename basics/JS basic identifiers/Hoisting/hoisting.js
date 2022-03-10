console.log(getName)
getName();
console.log(age);
console.log(yob); //ReferenceError: Cannot access 'yob' before initialization
console.log(y); //ReferenceError: y is not defined

function getName() {
    var gpa = 8;
    console.log('Datta! ', age, gpa, exp);
    var exp = 3;
}
var age = 25;
let yob = 1996


//-------------------var vs let
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


//-----------------------
let x = 'outer scope';
(function() {
    console.log(x);
    let x = 'inner scope';
}());
// Can you guess what console.log(x) will print now? Well, actually, the answer is nothing -- the code above will throw a ReferenceError
// since let x inside the fn is hoisted, it will visible to the console.log statement and hence that will only be taken here, not the global x
// ******* let/const declarations do hoist, but they throw errors when accessed before being initialized ********

// Temporal Dead Zone: https://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified