/* Adding elements to array
*  Appending array to array
* */

let acc = [1, 2,3]

//method 1 -> alters array in place, hence array retains changes
acc.push(4); //[1,2,3,4]

//method 2 -> creates new array. doesnt retain the changes
acc = [...acc, 5] //[1,2,3,4,5]
let b =[...acc, 6] //acc = [1,2,3,4,5] // b = [1,2,3,4,5,6]

//method 3 -> append multiple items
acc = [...acc, 6, 7]; //[ 1, 2, 3, 4, 5, 6, 7]
acc.push(8,9,10); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]


//Note .push() here returns the length of the new array
console.log(acc.push(12)); //12
