// Exercise 1:
// let birthDate1 = 1989;
// let birthDate2 = 2000;

// // 1980 0 // 2000 20 // 2005 25 // 2010 30 // 2020 40!
// // 2000 0  // 2005 5  // 2010 10 // 2020 20!

// let twoHalfAsOld = (birthDate2 - birthDate1) + birthDate2;
// console.log(twoHalfAsOld);

// Exercise 2;

let string = "hello you charming";
//slice to extract the last three elements for comparison
let stringEnding = string.slice((string.length - 3), (string.length - 0))
if (string.length > 3) {
    if (stringEnding === "ing") {
        string = string.replace("ing", "ly");
        console.log(string);
    }
} else {
    console.log(string);
}