//solution using let
function first() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

function second() {
    for (var i = 10; i < 13; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
}

function third() {
    let i;
    for (i = 100; i < 103; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

//solution using var
function fourth() {
    for (var i = 1; i <= 3; i++) {
        function outerFn(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }

        outerFn(i);
    }
    console.log('...')
}

first();
second();
third();
fourth();