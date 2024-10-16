// complete this js code
class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	greet() {
		console.log(`Hello, my name is ${name}, I am ${age} years old.`)
	}
}

class Employee extends Person(name, age) {
	constructor(name, age, jobTitle) {
		super(name, age);
		this._jobTitle = jobTitle;
	}

	jobGreet() {
		console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
