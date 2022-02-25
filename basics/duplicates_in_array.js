const arr = [1, 2, 3, 1, 2];
let counts = {}
arr.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
})
console.log(counts);

// hint
// (undefined || 0 ) +1 // 1
// undefined + 1 // NaN