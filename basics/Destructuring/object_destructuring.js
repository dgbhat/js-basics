const person = {
    firstName: "Nick",
    lastName: "Anderson",
    age: 35,
    sex: "M"
}
const {firstName: first, age, city = "Paris"} = person;

console.log(age) 	// 35 -- A new variable age is created and is equal to person.age
console.log(first)	 // "Nick" -- A new variable first is created and is equal to person.firstName
console.log(firstName)	 // ReferenceError -- person.firstName exists BUT the new variable created is named first
console.log(city)	 // "Paris" -- A new variable city is created and since person.city is undefined, city is equal to the default value provided "Paris".
