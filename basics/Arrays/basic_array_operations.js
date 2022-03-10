/* Adding elements to array */
/* Appending array to array */
let myArray = [1, 2, 3]

//method 1 -> alters array in place, hence array retains changes
myArray.push(4); //[1,2,3,4]

//method 2 -> creates new array. doesnt retain the changes
myArray = [...myArray, 5] //[1,2,3,4,5]
let b = [...myArray, 6] //myArray = [1,2,3,4,5] // b = [1,2,3,4,5,6]

//method 3 -> append multiple items
myArray = [...myArray, 6, 7]; //[ 1, 2, 3, 4, 5, 6, 7]
myArray.push(8, 9, 10); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

//Note .push() here returns the length of the new array
console.log(myArray.push(12)); //11