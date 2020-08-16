// let inp = document.getElementById("calculator").submit(); // Form submission

// console.log(inp);
function calculate(inputNumber) {
    let number = document.getElementsByName("inputNumber");
    document.querySelector('calculator-container').addEventListener('submit', function(noDefault) {
        noDefault.preventDefault();

    });
    console.log(number);
}