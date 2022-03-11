/* 'arguments' object bound to every function that is equal to an array of all the parameters passed into the function
*
* */

function myFunc() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

myFunc("Nick", "Anderson", 10, 12, 6);
// "Nick"
// "Anderson"
// 10
// 12
// 6