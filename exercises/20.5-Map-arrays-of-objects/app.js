let people = [
	{ name: 'Joe', birthDate: new Date(1986, 10, 24) },
	{ name: 'Bob', birthDate: new Date(1975, 5, 24) },
	{ name: 'Erika', birthDate: new Date(1989, 6, 12) },
	{ name: 'Dylan', birthDate: new Date(1999, 12, 14) },
	{ name: 'Steve', birthDate: new Date(2003, 4, 24) }
];

let simplifier = function (person) {

	let birthDate = person.birthDate;

	let ageDifMs = Date.now() - birthDate.getTime();
	let ageDate = new Date(ageDifMs);
	let age = Math.abs(ageDate.getFullYear() - 1970);


	return `Hello, my name is ${person.name} and I am ${age} years old`;
};

console.log(people.map(simplifier));