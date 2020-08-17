// exercise 1;

// let input = prompt("Enter a number here")
// console.log(input);

// let x = 5;
// let y = 6;

// if (x > y) {
//     console.log("X is larger than Y");
// } else  if (x < y){
//     console.log("Y is larger than X");
// }
// else {
// console.log("Y is the same as X");
// }


// exercise 2;
// let newDog = "Chihuaha";

// let dogLength = newDog.length;

// console.log(dogLength + " letters");
// newDog = newDog.toUpperCase();
// console.log(newDog);
// newDog = newDog.toLowerCase();
// console.log(newDog);

// if (newDog == "Chihuaha") {
//     console.log("I LOVE Chihuahua, it’s my favorite dog");
// } else {
//     console.log("I dont care, I prefer CATS");
// }

// exercise 3;
// userInput = prompt("enter a number");
// userInput = parseInt(userInput);
// if ((userInput % 2) === 0) {
//     console.log('x is an even number');
// } else {
//     console.log('x is not an even number');
// }

// exercise 4;

let users = ["Lea", "Mark", "Rodney", "Daniel", "Dovid", "Isaac", "Ron"];

let users_online = 5;
console.log(users_online.length);

if (users_online === 1) {
    console.log(users[0] + " " + "online");
} else if (users_online === 2) {
    console.log(users[0] + " " + users[1] + " " + "online");
} else if (users_online > 2) {
    console.log("user1, user2 and 3 more" + " " + "online");
} else {
    console.log("no one here...")
};