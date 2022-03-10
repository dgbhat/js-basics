function myFunc(x, y, ...params) {
    console.log(x);
    console.log(y);
    console.log(params)
}

myFunc("a", "b", "c", "d", "e", "f")
// "a"
// "b"
// ["c", "d", "e", "f"]

myFunc('a', 'b', { obj: 1, obj2: 2 })
myFunc('a', 'b', { obj: 1, obj2: 2 })


const {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

const n = {x, y, ...z};
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }

