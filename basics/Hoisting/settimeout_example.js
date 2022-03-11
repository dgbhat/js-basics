//solution using let
function first() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}
/*
0
1
2
*/

function second() {
    for (var i = 10; i < 13; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
}
/*
13
13
13
*/

function third() {
    let i;
    for (i = 100; i < 103; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}
/*
103
103
103
*/

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
/*
1
2
3
*/

function fifth() {
    function ex(n) {
        setTimeout(() => {
            if (n != undefined) console.log(n)
        }, 1000)
    }

    for (var i = 0; i < 3; i++) {
        ex(i);
    }
}
/*
0
1
2
*/

first();
second();
third();
fourth();
fifth();