// // Exercise 1 GOLD:)
// let word = prompt("Enter a word");
// let word2 = word;
// word = word.replace(/[aeiouAEIOU]/gi, "");
// console.log(word);
// // BONUS WOHOOO
// word2 = word2.replace(/[aeiouAEIOU]/gi, "t");
// console.log(word2);

// // Exercise 2;
// let lang = prompt('What language do you speak?');
// if (lang.length > 0) {
//     if (lang === "French") {
//         console.log("Oh no!! C'est un promleme!!");
//     } else if (lang === "English") {
//         console.log("Go learn another language!");
//     } else if (lang === "Hebrew") {
//         console.log("מה זאת השפה הזאת?");
//     }
// } else {
//     console.log("looks like you should learn Spanis!")
// }

// Exercise 3;

// let grade = 69;
// if ((grade >= 0) && (grade < 100)) {
//     if (grade >= 90) {
//         console.log("Your Grade is A");
//     } else if (grade >= 80) {
//         console.log("Your Grade is B");
//     } else if (grade >= 70) {
//         console.log("Your Grade is C");
//     } else if (grade >= 60) {
//         console.log("Your Grade is D");
//     }
// } else {
//     console.log("Error");
// }

// Exercise 4;
// A valid zip code is as follows:

// Zip codes consist of 5 consecutive digits
// Must only contain numbers(no non - digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.

let zip = 65454;
let zipPrompt = prompt("Write your code here");
pattern = /^\d{5}$/;
console.log(pattern.test(zipPrompt));