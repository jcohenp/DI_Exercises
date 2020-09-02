alert("Enter natural numbers if possible:)");
let x = prompt("Enter the first value");
let y = prompt("Enter the second value");
let operation = prompt("Enter the operator to use *, +, -, %, or / .");
console.log(operation);
if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
    var result = eval(x + operation + y);
    alert("the result of" + x + " " + operation + y + "is" + " " + result);
} else {
    alert('the operator was invalid!')
}
console.log(result);