// function validateStringArg(fn) {
// 	// c) Extend the decorator function to validate as strings all arguments passed to fn
// 	return function (...args) {
// 		console.log("args", args);
// 		args.forEach((arg) => {
// 			if (typeof arg !== "string") {
// 				throw new TypeError("Input must be a string");
// 			}
// 		});
// 		return fn(...args);
// 	};
// }
// // b) Extend orderItems to use the ... rest operator, allowing multiple item name
// // arguments, and include them all in the returned string
// function orderItems(...itemName) {
// 	const item = itemName.join(", ");
// 	console.log(`Order placed for: ${item}`);
// }
// try {
// 	const validatedOrderItem = validateStringArg(orderItems);

// 	console.log(validatedOrderItem("Apple Watch", "Ipad", "Iphone")); // should run the function
// 	console.log(validatedOrderItem("Apple Watch", 123));
// } catch (error) {
// 	console.log(error.message);
// }
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

// const myClock = new DigitalClock("my clock:");
// myClock.start();

class PrecisionClock extends DigitalClock {
	constructor(prefix, precision = 1000) {
		super(prefix);
		this.precision = precision;
	}
	// start() {
	// 	console.log("precision clock");
	// 	this.display();
	// 	this.timer = setInterval(() => this.display(), this.precision);
	// }
}

const preciseClock = new PrecisionClock("Precise Clock:", 500);
preciseClock.start();
