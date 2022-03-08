const users = [
    {fn: 'Datt1', ln: 'Bhat1', age: 25},
    {fn: 'Datt2', ln: 'Bhat2', age: 55},
    {fn: 'Datt3', ln: 'Bhat3', age: 75},
    {fn: 'Datt4', ln: 'Bhat4', age: 25}
]
//Ex1---------------------------------------------
// op // {25:2, 55:1, 75:1}
const result = users.reduce((acc, curr) => {
    acc[curr.age] = (acc[curr.age] || 0) + 1;
    return acc;
}, {});
console.log(result);

//OR//
const result2 = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(result2);

//Ex2---------------------------------------------
// op // ['Datt1','Datt14] //array of fn, if age < 30
console.log(
    users.reduce((acc, curr) => {
        if (curr.age < 30) {
            acc.push(curr.fn);
        }
        return acc;
    }, [])
);

//or
let a = []
users.forEach(x => {
    if (x.age < 30) {
        a.push(x.fn);
    }
})
console.log(a);

//or
console.log(users.filter(x => x.age < 30).map(x => x.fn));


//Ex3---------------------------------------------
const students = [
    {name: "Nick", grade: 10},
    {name: "John", grade: 15},
    {name: "Julia", grade: 19},
    {name: "Nathalie", grade: 9},
];

// op -> 44 // 10+15+19 (sum of all grades >= 10)

// method1 - one value from the array -> reduce()
let sumAboveTen = students.reduce(function (acc, curr) {
    //initially acc = 0
    acc = curr.grade > 9 ? (acc + curr.grade) : acc;
    //finally acc = sum
    return acc
}, 0);
console.log(sumAboveTen)