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

//Question 3
function printMe() {
	console.log("printing debounced message");
}
printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
