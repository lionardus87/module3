// Question 1

"" + 1 + 0; // "10"
"" - 1 + 0; // -1
true + false; // 1
!true; // false
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // 9px
"$" + 4 + 5; // $45
"4" - 2; // 2
"4px" - 2; // NaN
" -9 " + 5; // -95
" -9 " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
undefined == null; // true
undefined === null; // false
" \t \n" - 2; // -2

// Question 2

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; // "34"
let multiplication = three * four; // 12
let division = three / four; // 0.75
let subtraction = three - four; // -1
let lessThan1 = three < four; // true
let lessThan2 = thirty < four; // true
console.log(Number(thirty) < Number(four)); //false

//Question 3
if (0) console.log("#1 zero is true"); //false
if ("0") console.log("#2 zero is true");
if (null) console.log("null is true"); //false
if (-1) console.log("negative is true");
if (1) console.log("positive is true");

//Qestion 4
let a = 2,
	b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
	result += "less than 10"; // 2 + 3 is less than 10, += will add 1 after return this result
} else {
	result += "greater than 10";
}

//Question 5
function getGreeting(name) {
	return "Hello " + name + "!";
}

const greeting = (name2) => console.log("Hello " + name2 + "!");

console.log(getGreeting("Andy"));
greeting("Michael");

//Question 6
const westley = {
	name: "Westley",
	numFingers: 5,
};
const rugen = {
	name: "Count Rugen",
	numFingers: 6,
};
const inigo = {
	firstName: "Inigo",
	lastName: "Montoya",
	greeting(person) {
		let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
		console.log(greeting + this.getCatchPhrase(person));
	},
	getCatchPhrase: (person) =>
		person.numFingers === 6
			? "You killed my father. Prepare to die"
			: "Nice to meet you.",
};

inigo.greeting(westley);
inigo.greeting(rugen);

//Question 7
const basketballGame = {
	score: 0,
	foul: 0,
	freeThrow() {
		this.score++;
		return this;
	},
	basket() {
		this.score += 2;
		return this;
	},
	threePointer() {
		this.score += 3;
		return this;
	},
	foulCount() {
		this.foul++;
		return this;
	},
	halfTime() {
		console.log(
			"Halftime score is " + this.score + ". Number of foul is: " + this.foul
		);
		return this;
	},
	fullTime() {
		console.log(
			"Fulltime score is " + this.score + ". Number of foul is: " + this.foul
		);
		return this;
	},
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
	.basket()
	.foulCount()
	.freeThrow()
	.foulCount()
	.freeThrow()
	.basket()
	.threePointer()
	.halfTime()
	.threePointer()
	.basket()
	.foulCount()
	.freeThrow()
	.freeThrow()
	.fullTime();

//Question 8
const sydney = {
	name: "Sydney",
	population: 5_121_000,
	state: "NSW",
	founded: "26 January 1788",
	timezone: "Australia/Sydney",
};

function objCity(city) {
	for (let key in city) {
		console.log(`${key} : ${city[key]}`);
	}
}

const melb = {
	name: "Melbourne",
	population: 5_392_000,
	state: "VIC",
	founded: "30 August 1835",
	timezone: "Australia/Melbourne",
};

console.log("Sydney details: ");
objCity(sydney);
console.log("Melbourne details: ");
objCity(melb);

//Question 9
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };
``;

let moreSports = [...teamSports];

//a)Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)

moreSports.push("Soccer");
moreSports.unshift("Badminton");

//b) Create a new dog2 variable equal to dog1 and give it a new value
let dog2 = dog1;

//c) Create a new cat2 variable equal to cat1 and change its name property
let cat2 = { ...cat1 };
cat2.name = "Catty";

//d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
console.log(teamSports);
console.log(dog1);
console.log(cat1);

//e) Change the way the moreSports and cat2 variables are created to ensure the `originals remain independent
console.log(moreSports);
console.log(dog2);
console.log(cat2);

//Question 10
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.human = true;
	//e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.
	this.canDrive = function () {
		return this.age >= 16
			? "This person can drive"
			: "This person isn't allowed to drive";
	};
}
//a)Create a new person using the constructor function and store it in a variable
let person1 = new Person("Andy", 15);

//b) Create a second person using different name and age values and store it in a separate variable
let person2 = new Person("Michael", 27);

//c) Print out the properties of each person object to the console
console.log(
	`${person1.name}` +
		" is " +
		`${person1.age}` +
		" years old. " + person1.canDrive()
);
console.log(
	`${person2.name}` +
		" is " +
		`${person2.age}` +
		" years old. " + person2.canDrive()
);

//d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
let personClass = function (firstName, lastName, year) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.year = year;
};

let person3 = new personClass("John", "Howard", 85);
console.log(person3);
