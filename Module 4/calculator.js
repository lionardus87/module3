let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);

Number.prototype.calculate = function (num,operator) {
    switch(operator){
        case '+': return this + num;
        case '-': return this - num;
        case '*': return this * num;
        case '/': return num === 0 ? "Cannot divide by zero" : this / num;
        default: return "Invalid operator!";
    }   
}