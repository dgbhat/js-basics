/* Whats spread operator */

// SPREAD OPERATOR JUST SPREADS ALL THE ITERABLE ELEMENTS(an array) INTO COMMA SEPERATED ELEMENTS
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
sum(...numbers); //6


//------------------------------------------
/* Appending array elements to array */
const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d", "e", "f"]; // ["a", "b", "c", "d", "e", "f"]

//VS//

const arr1 = ["a", "b", "c"];
const arr2 = [arr1, "d", "e", "f"]; // [["a", "b", "c"], "d", "e", "f"]