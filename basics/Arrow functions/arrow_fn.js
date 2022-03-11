
/* Brief
*
* */
function double(x) { returnx * 2; }  //Traditional way
// =
const double = (x) => { return x * 2; }
// =
const double = (x) => x * 2;
// =
const double = x => x * 2;  //Same function written as anarrow function with implicit return


/* Features
	- More concise
	- this is picked up from surroundings
    - implicit return
* */

/*
	• Implicit return
		○ remove the brackets and the return keyword. That's why it's called an implicit return
		○ if you want to implicitly return an object ? github -modern js
	• No paranthesis
		○ if single parameter
		○ if no parameters ? github -modern js
* */


/*
* 'this' keyword in arrow fn :
	In an arrow function, this is equal to the this value of the enclosing execution context. What it means is that an arrow function doesn't create a new this, it grabs it from its surrounding instead.

* Arrow fn does not bind with 'this'
* */