Number.prototype.calculate = function (num, operator) {
	switch (operator) {
		case "+":
			return this + num;
		case "-":
			return this - num;
		case "*":
			return this * num;
		case "/":
			return num === 0 ? "Cannot divide by zero" : this / num;
		default:
			return "Invalid operator!";
	}
};
let operatorValue = null;

function calculation(operator) {
	operatorValue = operator;
}

function equal() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	let resultField = document.getElementById("result");

	let result = num1.calculate(num2, operatorValue);
	resultField.value = result;
}

function clear() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
    operatorValue = null;
}
