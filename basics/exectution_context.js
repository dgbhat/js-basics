var x = 1; //this will be in Global Exec Context
a();
console.log(x);

function a() {
    var x = 10; //this will be in Local Exec Context. Every function will have its own execution context created upon its invocation. And it will be deleted upon function completion.
    console.log(x); //x is read from local exec context's memory space. If not found then will be read from Global exec context's memory
}