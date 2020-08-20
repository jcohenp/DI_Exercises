let equation = "0";
let calcDisplay = document.getElementById("display");
let operators = ["+", "-", "/", "*", "."];
calcDisplay.innerHTML = (equation);

function my_f(numInput) {
    if (equation == "0") {
        equation = ""
    }
    if (numInput === "=") {
        if (equation != "") {
            calculate(equation);
        }
    } else if (numInput == "clear") {
        if (equation.length > 1) {
            console.log(equation)
            equation = equation.substring(0, (equation.length - 1))
            calcDisplay.innerHTML = (equation);
        } else {
            equation = "0";
            calcDisplay.innerHTML = (equation);
        }
    } else if (numInput == "reset") {
        equation = "0";
        calcDisplay.innerHTML = (equation);
    } else if (((numInput > 0) && (numInput < 10)) || (operators.includes(numInput) == true)) {
        equation = equation + numInput;
        calcDisplay.innerHTML = (equation);
    }
}

function calculate(equation) {
    if ((equation.length < 1) && (equation.includes(operators) == true)) {
        equation = "0";
        calcDisplay.innerHTML = equation;
    } else {
        equation = eval(equation);
        console.log(equation);
        calcDisplay.innerHTML = equation;
    }
}