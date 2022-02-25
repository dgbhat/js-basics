let acc = [1, 2,3]
//1 way
acc.push(4); //alters array in place, hence array retains changes
//[1,2,3,4]

//2 way
acc = [...acc, 5] //creates new array. doesnt retain the changes
//[1,2,3,4,5]
let b =[...acc, 6]
//acc = [1,2,3,4,5] // b = [1,2,3,4,5,6]

//append multiple items //
acc = [...acc, 6, 7];
//[ 1, 2, 3, 4, 5, 6, 7]
acc.push(8,9,10);
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]



//also notice

console.log(acc.push(12)); //.push returns the length of the new array
//12