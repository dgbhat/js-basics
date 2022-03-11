/* Function default parameter value
*
* The default parameter is applied in two and only two situations:
    a. No parameter provided
    b. undefined parameter provided
* */

function myFunc(x = 10) {
    return x;
}

console.log(myFunc())//10
console.log(myFunc(undefined))//10
console.log(myFunc(5))//5
console.log(myFunc(null))//null

