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