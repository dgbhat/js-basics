const arr = [1, 2, 5, 7, 10, 5]
//op -> 10 (largest)

//method 1------------------------
let big = arr[0];
arr.forEach(x => {
    big = x > big ? x : big;
});
console.log(big);


//method 2-----------------------
const big2 = arr.reduce((acc, curr) => {
    acc = curr > acc ? curr : acc;
    return acc
}, arr[0]);
console.log(big2)