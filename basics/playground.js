const a = ['a', 'b', 'c', 'd', 5];

Array.prototype.nextBit = function (arr) {
    const arr1 = arr || [];
    const newArr = []
    arr1.forEach(ele => newArr.push(String.fromCharCode(ele.toString().charCodeAt() + 1)))
    return newArr;
};

console.log(a.nextBit(a));
