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
	let count = 0;
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
class DigitalClock {
	constructor(prefix) {
		this.prefix = prefix;
	}
	display() {
		let date = new Date();
		//create 3 variables in one go using array destructuring
		let [hours, mins, secs] = [
			date.getHours(),
			date.getMinutes(),
			date.getSeconds(),
		];

		if (hours < 10) hours = "0" + hours;
		if (mins < 10) mins = "0" + mins;
		if (secs < 10) secs = "0" + secs;
		console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
	}
	stop() {
		clearInterval(this.timer);
	}
	start() {
		this.display();
		this.timer = setInterval(() => this.display(), 1000);
	}
}

const myClock = new DigitalClock("my clock:");
myClock.start();

//a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'. This precision parameter should default to 1 second if not supplied.
class PrecisionClock extends DigitalClock {
	constructor(prefix, precision = 1000) {
		super(prefix);
		this.precision = precision;
	}
	start() {
		this.display();
		this.timer = setInterval(() => this.display(), this.precision);
	}
}

const preciseClock = new PrecisionClock("Precise Clock:", 500);
preciseClock.start();

//b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// default to 07:00 if not supplied.
class AlarmClock extends DigitalClock {
	constructor(prefix, alarmTime = "7:00") {
		super(prefix);
		this.alarmTime = alarmTime;
	}
	display() {
		let date = new Date();
		let [hours, mins] = [date.getHours(), date.getMinutes()].map((n) =>
			n < 10 ? "0" + n : n
		);
		let currentTime = `${hours}:${mins}`;

		console.log(`${this.prefix} ${currentTime}`);

		if (currentTime === this.alarmTime) {
			console.log("Wake Up!");
			this.stop();
		}
	}
}

const alarm = new AlarmClock("alarm:", "12:00");
alarm.start();

// Question 8

// a) Create a decorator function validateStringArg(fn) which will validate an
// argument passed to fn to ensure that it is a string, throwing an error if not
function validateStringArg(fn) {
	// c) Extend the decorator function to validate as strings all arguments passed to fn
	return function (...args) {
		args.forEach((arg) => {
			if (typeof arg !== "string") {
				throw new TypeError("Input must be a string");
			}
		});
		return fn(...args);
	};
}
// b) Extend orderItems to use the ... rest operator, allowing multiple item name
// arguments, and include them all in the returned string
function orderItems(...itemName) {
	const item = itemName.join(", ");
	console.log(`Order placed for: ${item}`);
}
try{
const validatedOrderItem = validateStringArg(orderItems);

console.log(validatedOrderItem("Apple Watch", "Ipad", "Iphone")); // should run the function
console.log(validatedOrderItem("Apple Watch", 123));
} catch(error) {
	console.log(error.message);
}
// d) When testing the decorated function, use try-catch blocks to handle errors thrown for
// non-string arguments

try {
	validatedOrderItem("Apple Watch", "Ipad", "Iphone");
} catch (error) {
	console.log(error.message);
}
try {
	validatedOrderItem("Apple Watch", 123);
} catch (error) {
	console.log(error.message);
}

// Question 9
function randomDelay() {
	// your code
	// 	a) Create a promise-based alternative randomDelay() that delays execution for a
	// random amount of time (between 1 and 20 seconds) and returns a promise we can use
	// via .then(), as in the starter code below
	const delayTime = Math.floor(Math.random() * 2000) + 1000;
	// 	b) If the random delay is even, consider this a successful delay and resolve the promise,
	// and if the random number is odd, consider this a failure and reject it
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (delayTime % 2 === 0) {
				resolve(`Success for ${delayTime/1000} seconds.`);
			} else {
				reject(`Failed for ${delayTime / 1000} seconds`);
			}
		}, delayTime);
	});
}
randomDelay()
	//d) Try to update the then and catch messages to include the random delay value
	.then((message) => console.log(`Promise resolved ${message} `))
	.catch((error) => {
		//c) Update the testing code to catch rejected promises and print a different message
		console.error(`Promise rejected ${error}`);
	});

// Question 10
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from "node-fetch";
globalThis.fetch = fetch;
async function fetchURLData(urls) {
	try {
		let fetchPromises = urls.map((url) =>
			fetch(url).then((response) => {
				if (response.status === 200) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status ${response.status}`
					);
				}
			})
		);
		const result = await Promise.all(fetchPromises);
		return result;
	} catch (error) {
		throw error;
	}
	return false;
}
const urls = [
	"https://jsonplaceholder.typicode.com/todos/1",
	"https://jsonplaceholder.typicode.com/todos/2",
	"https://jsonplaceholder.typicode.com/todos/3",
];

fetchURLData(urls)
	.then((data) => console.log(data))
	.catch((error) => console.error(error.message));
// a) Write a new version of this function using async/await

// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.
