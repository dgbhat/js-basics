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
