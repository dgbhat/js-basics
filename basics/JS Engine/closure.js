function f1() {
    let a=1,b=4;
    return function () {
        console.log(a);
    };
}

var y = f1()
console.log(y)
y()

// more examples to be taken from NamasteJS@YT, stackoverflow