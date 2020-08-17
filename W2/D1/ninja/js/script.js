// // exercise 1;

// console.log(5 >= 1); //1
// console.log(0 === 1); // 0
// console.log(4 <= 1); // 0
// console.log(1 != 1); // 0
// console.log("A" > "B"); // 0
// console.log("B" < "C") //  1
// console.log("a" > "A"); // 1
// console.log("b" < "A"); // 0
// console.log(true === false); // 0
// console.log(true != true); // 0

// // exercise 2;

// let c; //no value
// let a = 34;
// let b = 21;
// a = 2; //reassigning a
// a + b; //23
// console.log(3 + 4 + '5'); //'75'
// console.log(c);

// // exercise 3; 
// let input = prompt('Enter a string of numbers separated by a comma and space.'); //undefine;
// let splittedInput = input.split(", ");
// console.log(splittedInput);
// console.log(splittedInput[0] * splittedInput[1]); //if input 45, 45 result 2025;

// exercise 4;
let boom = prompt('Enter the O number in Boom');
let n = parseInt(boom);
if (n.length < 0) {
    let inputstr = "b" + "o".repeat(n) + "m";
    if ((n % 5) === 0) {
        inputstr = inputstr.toUpperCase();
        if ((n % 2) === 0) {
            inputstr = inputstr.concat("!");
        }
        console.log(inputstr);
    } else if ((n > 2) || ((n % 2) === 0)) {
        console.log(inputstr);
    } else {
        console.log("Looks like you didn't put a proper n, DUMBASS!!")
    }
} else {
    console.log("You didn't enter anything")
    let errorMsg = -1;
    console.log("Error: " + errorMsg);
}