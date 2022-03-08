const numbers = [0, 1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.map(n => n * 2); // [0, 2, 4, 6, 8, 10, 12]
const evenNumbers = numbers.filter(n => n % 2 === 0); // [0, 2, 4, 6]
const sum = numbers.reduce((prev, next) => prev + next, 0); // 21
const greaterThanFour = numbers.find((n) => n > 4); // 5
const every = numbers.every(value => value % 2 === 0); // true
const some = numbers.some(value => value > 5); // true

console.log(doubledNumbers, evenNumbers, sum, greaterThanFour, every, some);


/*
1. forEach --Just iterates
2. find --Returns the first occurance of the matching condition in cb fn
3. every --Determines whether all the members of an array satisfy the specified condition in cb fn
4. some --Determines whether atleast one element of an array satisfies the condition in cb fn
5. filter --Returns the elements of an array that meet the condition specified in a cb fn.
6. map --Does One to one mapping and returns the transformed array of same length
7. reduce --Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the cb fn

-Definitions from JS source code!!
*/


//--------------------------------------------------
// Make your own Array Prototype method

const a = ['a', 'b', 'c', 'd', 5];

Array.prototype.nextBit = function (arr) {
    const arr1 = arr || [];
    const newArr = []
    arr1.forEach(ele => newArr.push(String.fromCharCode(ele.toString().charCodeAt() + 1)))
    return newArr;
};

console.log(a.nextBit(a)); // [ 'b', 'c', 'd', 'e', '6' ]