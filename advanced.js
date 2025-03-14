//Question 1
function makeCounter() {
	let currentCount = 0;
	return function () {
		currentCount++;
		console.log(currentCount);
		return currentCount;
	};
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

//a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
let counter2 = makeCounter();
counter2();
counter2();
counter2();

//b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)
function newCounter(a) {
	let currentCount = a;
	return function () {
		currentCount++;
		console.log(currentCount);
		return currentCount;
	};
}
let counter3 = newCounter(3);
console.log("Start count different");
counter3();
counter3();
counter3();

//c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.
function makeIncrement(b) {
	let currentCount = 0;
	return function () {
		currentCount += b;
		console.log(currentCount);
		return currentCount;
	};
}
let counter4 = makeIncrement(3);
console.log("Increment different");
counter4();
counter4();
counter4();

//Question 2
function delayMsg(msg) {
	console.log(`This message will be printed after a delay: ${msg}`);
}
setTimeout(delayMsg, 100, "#1: Delayed by 100ms"); // will print four because has 100mili second delay
setTimeout(delayMsg, 20, "#2: Delayed by 20ms"); // will print third because has 20mili second delay
setTimeout(delayMsg, 0, "#3: Delayed by 0ms"); // will print second because has 0mili second delay
delayMsg("#4: Not delayed at all"); // will print first because no delay

//b) Rewrite delayMsg as an arrow function

setTimeout(
	(delayMessage) => {
		console.log(delayMessage + " Delay message after 1 sec");
	},
	1000,
	"Hello!"
);

const delayMessage = (message, delay) => {
	setTimeout(() => console.log(message), delay);
};

delayMessage("Hello will appears after 2s", 2000);
//d) Use clearTimeout to prevent the fifth test from printing at all.
const cancelMsg = (message, delay) => {
	const timeoutId = setTimeout(() => console.log(message), delay);
	return timeoutId; // Return the timeout ID to allow cancellation
};
const msg2 = cancelMsg("clear 5sec timeout", 11000); //c) Add a fifth test which uses a large delay time (greater than 10 seconds)
clearTimeout(msg2);

// Question 3
function debounce(func, ms) {
	let timer;
	return function (...args) {
		clearTimeout(timer); // Clear the previous timer
		timer = setTimeout(() => func.apply(this, args), ms);
	};
}

function printMe(msg) {
	console.log(msg);
}

printMe = debounce(printMe, 2000); //create this debounce function for a)

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(() => printMe("1.."), 100);
setTimeout(() => printMe("2.."), 200);
setTimeout(() => printMe("3.."), 300);

// Question 4
// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.
function printFibonacci(limit) {
	let a = 0;
	let b = 1;
	count = 0;
	const interval = setInterval(() => {
		console.log(a);
		let c = a + b;
		a = b;
		b = c;
		count++;
		if (count >= limit) {
			clearInterval(interval);
			console.log("finished");
		}
	}, 1000);
}
printFibonacci(10);

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing
function printFibonacciTimeouts(limit, delay = 1000, a = 0, b = 1, count = 0) {
	if (count >= limit) {
		console.log("finished");
		return;
	}
	console.log(a);
	setTimeout(() => {
		printFibonacciTimeouts(limit, delay, b, a + b, count + 1);
	}, delay);
}
printFibonacciTimeouts(10);
// c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

//Question 5
let car = {
	make: "Porsche",
	model: "911",
	year: 1964,

	description() {
		console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
	},
};
car.description(); //works
// a) Fix the setTimeout call by wrapping the call to car.description() inside a function
setTimeout(() => {
	car.description(), 200;
});
setTimeout(car.description.bind(car), 200); //fails

// b) Change the year for the car by creating a clone of the original and overriding it
let newCar = { ...car, year: 2024 };
newCar.description();

// c) Does the delayed description() call use the original values or the new values from b)? Why?
// because newCar class has setTimeout function and JS doesnt remember the object

// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
setTimeout(newCar.description.bind(newCar), 200);

// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)
let bindDesc = newCar.description.bind(newCar);
setTimeout(bindDesc, 200);
let newerCar = { ...newCar, model: "991" };
setTimeout(bindDesc, 400);

//Question 6
// a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters
Function.prototype.delay = function (ms) {
	let fn = this;
	return function (...args) {
		// b) Use apply to improve your solution so that delayed functions can take any number of parameters
		setTimeout(() => fn.apply(null, args), ms);
	};
};
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.
function multiply(a, b, c, d) {
	console.log(a * b * c * d);
}
multiply.delay(500)(1, 2, 3, 4); // prints 25 after 500 milliseconds

//Question 7

