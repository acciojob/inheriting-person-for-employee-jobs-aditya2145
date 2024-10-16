// complete this js code
class Person {
	constructor(_name, _age) {
		this._name = _name;
		this._age = _age;
	}

	greet() {
		console.log(`Hello, my name is ${this._name} and I am ${this._age} years old.`)
	}
}

class Employee extends Person {
	constructor(_name, _age, _jobTitle) {
		super(_name, _age);
		this._jobTitle = _jobTitle;
	}

	jobGreet() {
		console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}.`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
