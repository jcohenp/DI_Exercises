// // Exercise 1;

// let string = prompt("Enter any number and this will check if it is divisible by three");

// function checkDivisibleBythree(string) {
//     if (string.length > 0) {
//         divisible = false;
//         string = string.split("");
//         sum = 0;
//         for (i in string) {
//             sum += string[i];
//         }
//         if ((sum % 3) === 0.) {
//             divisible = true
//         }
//     }
//     return divisible;
// }

// console.log(string)
// console.log(checkDivisibleBythree(string))


//Global Object
var average = {};
var name;
var namecourse;
var grade;
var coefficient;
var process;

function ask() {
    name = prompt('What is your name?');
    while (name === null || name === '') {
        name = prompt('What is your name?');
    }
    namecourse = prompt('Tell me the name of the course (Ex: Maths, Physics, etc…)');
    while (namecourse === null || namecourse === '') {
        namecourse = prompt('Incorrect Answer, Tell me the name of the course (Ex: Maths, Physics, etc…)');
    }
    grade = prompt('Tell me the grade you think you are going to heve in ' + namecourse);
    while (grade === null || grade === '' || isNaN(grade)) {
        grade = prompt('Incorrect Answer, Tell me the grade you think you are going to heve in ' + namecourse);
    }
    coefficient = prompt('Tell me the coeffiecient of ' + namecourse);
    while (coefficient === null || coefficient === '' || isNaN(coefficient)) {
        coefficient = prompt('Incorrect Answer, Tell me the coeffiecient of ' + namecourse);
    }
    var course = {
        name: namecourse,
        grade: grade,
        coefficient: coefficient
    }
    average["Course"] = course;
    process = prompt('Do you want to continue the process with a new course, grade, and coefficient? (Yes or No)');
    while (process === null || process === '') {
        process = prompt('Do you want to continue the process with a new course, grade, and coefficient? (Yes or No)');
    }
    if (process === 'Yes' || process === 'yes') {
        //call function again
        ask();
    } else if (process === 'No' || process === 'no') {
        console.log('Average Object:', average);
        console.log(name + ' Your semester Average in ' + namecourse + ' is ' + (grade * coefficient) / 5);
    } else {
        console.log('Please try again');
        ask();
    }
}
//call function first time
ask();