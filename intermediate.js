//Question 1

function ucFirstLetters(message) {
	const splitMsg = message.split(" ");
	const upperCase = splitMsg.map(
		(word) => word.charAt(0).toUpperCase() + word.slice(1)
	);
	return upperCase.join(" ");
}
console.log(ucFirstLetters("los angeles")); //Los Angeles

//Question 2
function truncate(word, max) {
	if (word.length > max) {
		return word.slice(0, max) + "...";
	}
	return word;
}
console.log(truncate("This text will be truncated if it is too long", 25));
// This text will be truncat...

//Question 3
const animals = ["Tiger", "Giraffe"];
console.log(animals);
//a) Add 2 new values to the end
animals.push("Monkey", "Bird");
console.log(animals);
//b) Add 2 new values to the beginning
animals.unshift("Dog", "Cat");
console.log(animals);
//c) Sort the values alphabetically
animals.sort();
console.log(animals);
//d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
let newAnimal = animals.splice(2, 2, "Snake", "Rabbit");
console.log(newAnimal);
console.log(animals);
//e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.
function findMatchingAnimal(beginsWith) {
	let findMatchingAnimal = animals.find((animal) =>
		animal.toLowerCase().startsWith(beginsWith.toLowerCase())
	);
	console.log(findMatchingAnimal);
}

findMatchingAnimal("c");

//Question 4
function camelCase(sentence) {
	let words = sentence.split("-");
	let result = words[0];
	words.slice(1).forEach((word) => {
		result += word.charAt(0).toUpperCase() + word.slice(1);
	});
	return result;
}
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

//Question 5
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);

//a) Explain why the above code returns the wrong answer? toFixed converts number into string
//b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.
function currencyAddition(float1, float2) {
	let result = (float1 * 100 + float2 * 100) / 100;
	return parseFloat(result.toFixed(2));
}
console.log(currencyAddition(0.2, 0.1));

//c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result.
function currencyOperation(float1, float2, operation) {
	let result;
	switch (operation) {
		case "+":
			result = (float1 * 100 + float2 * 100) / 100;
			break;
		case "-":
			result = (float1 * 100 - float2 * 100) / 100;
			break;
		case "*":
			result = float1 * float2;
			break;
		case "/":
			result = float1 * float2;
			break;
		default:
			return "Invalid Operation";
	}
	return parseFloat(result.toFixed(2));
}
console.log(currencyOperation(0.22, 0.01, "+"));
console.log(currencyOperation(0.5, 0.3, "-"));
console.log(currencyOperation(0.2, 0.4, "*"));
console.log(currencyOperation(0.5, 0.1, "/"));

//d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.
function currencyDecimals(float1, float2, operation, numDecimals) {
	if (numDecimals < 1 || numDecimals > 10) {
		return "Error: decimal number must be between 1 and 10";
	}
	let result;
	switch (operation) {
		case "+":
			result = (float1 * 100 + float2 * 100) / 100;
			break;
		case "-":
			result = (float1 * 100 - float2 * 100) / 100;
			break;
		case "*":
			result = float1 * float2;
			break;
		case "/":
			result = float1 * float2;
			break;
		default:
			return "Invalid Operation";
	}
	return parseFloat(result.toFixed(numDecimals));
}
console.log(currencyDecimals(0.22123, 0.01123, "+", 5));
console.log(currencyDecimals(0.5123, 0.3234, "-", 3));
console.log(currencyDecimals(0.2123, 0.4234, "*", 11));
console.log(currencyDecimals(0.5234, 0.1234, "/", 6));

console.log(0.3 == currencyAddition(0.1, 0.2));
console.log(0.3 == currencyOperation(0.1, 0.2, "+"));

// Question 6
const colours = [
	"red",
	"green",
	"blue",
	"yellow",
	"orange",
	"red",
	"blue",
	"yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

function unique(duplicatesArray) {
	let uniqueArray = new Set(duplicatesArray);
	return uniqueArray;
}

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

// Question 7
const books = [
	{
		id: 1,
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		year: 1925,
	},
	{ id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
	{ id: 3, title: "1984", author: "George Orwell", year: 1949 },
	{ id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
	{
		id: 5,
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		year: 1951,
	},
];
//a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
function getBookTitle(bookId) {
	const search = books.find((b) => b.id === bookId);
	return search ? search.title : "Invalid ID";
}
console.log(getBookTitle(1));

//b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
function getOldBooks() {
	return books.filter((b) => b.year < 1950);
}
console.log(getOldBooks());

//c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’
function addGenre() {
	return books.map((b) => ({ ...b, genre: "Classic" }));
}

console.log(addGenre());

//d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.
function getTitles(authorInitial) {
	return books
		.filter((b) => b.author.startsWith(authorInitial))
		.map((b) => b.title);
}
console.log(getTitles("F"));

// e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.
function latestBook() {
	let latestYear = 0;
	books.forEach((b) => {
		if (b.year >= latestYear) {
			latestYear = b.year;
		}
	});
	return books.find((b) => b.year === latestYear);
}
console.log(latestBook());

// Question 9
let salaries = {
	Timothy: 35000,
	David: 25000,
	Mary: 55000,
	Christina: 75000,
	James: 43000,
};
//a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
function sumSalaries(salaries) {
	return Object.values(salaries).reduce((total, salary) => total + salary, 0);
}

console.log(sumSalaries(salaries));

//b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary
function topEarner(salaries) {
	return Object.entries(salaries).reduce((highest, current) =>
		current[1] > highest[1] ? current : highest
	)[0];
}

console.log(topEarner(salaries));
// Question 10
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

//a) Print the total number of minutes that have passed so far today
const minute = today.getHours() * 60;
console.log(minute + " minutes have passed so far today");

//b) Print the total number of seconds that have passed so far today
const second = today.getHours() * 60 * 60;
console.log(second + " seconds have passed so far today");

//c) Calculate and print your age as: 'I am x years, y months and z days old'
function calculateAge(birthDate) {
	const today = new Date();
	const born = new Date(birthDate);

	let years = today.getFullYear() - born.getFullYear();
	let months = today.getMonth() - born.getMonth();
	let days = today.getDate() - born.getDate();

	if (days < 0) {
		months--;
		let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
		days += lastMonth.getDate();
	}
	if (months < 0) {
		years--;
		months += 12;
	}

	console.log(`I am ${years} years, ${months} months, and ${days} days old.`);
}

calculateAge("1987-09-05");

//d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.
function daysInBetween(date1, date2) {
	const d1 = new Date(date1);
	const d2 = new Date(date2);
	let different = Math.abs(d2 - d1);
	return Math.ceil(different / (1000 * 60 * 60 * 24));
}

console.log(daysInBetween("2023-3-12", "2025-3-12"));
