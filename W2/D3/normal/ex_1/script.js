// // // Exercise 1;

// let arrayColors = ["black", "green", "blue", "red", "indigo"];
// let st = ["st", "nd", "rd", "th"];
// for (i = 0; i < arrayColors.length; ++i) {
//     stNum = i + 1;
//     // check for number postfix, from th on, its all the same
//     if (i > 3) {
//         k = 3;
//     } else {
//         k = i;
//     }
//     console.log("My " + stNum + st[k] + " choice is " + arrayColors[i]);
// }

// // Exercise 2;

// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// for (indexInNames = 0; indexInNames < names.length; ++indexInNames) {
//     console.log(names[indexInNames].charAt(0));
// }

// // Exercise 3;

// // execute once no matter what the answer and then again untl the entered number is larger than 10
// do {
//     number = prompt('enter a number!');
//     parseInt(number);
//     console.log(number)
// }
// while (number < 10) {
//     number = prompt('enter a number!');
//     parseInt(number);
//     console.log(number)
// }


// Exercise 4;

// let people = ["Greg", "Mary", "Devon", "James"];

// for (i=0;i<people.length;i++){//1
//     console.log(people[i])
// }

// people.shift() //2

// for (i=0;i<people.length;i++){
//     console.log(people[i])
// }

// people.splice(people.indexOf("James"),1,"Jason");//3
// people.splice(2, 1, "Jason"); //3

// for (i=0;i<people.length;i++){
//     console.log(people[i])
// }

// people.push("Roy"); //4

// for (i=0;i<people.length;i++){
//     console.log(people[i])
// }



// for (i=0;i<people.length;i++){ //5
//     if (people[i]==="Mary") { break; }
//     console.log(people[i])
// } 


// people = people.slice(1,3)//6--
// console.log(people)

// var place = people.indexOf("Mary");//7--
// console.log(place);

// var place2 = people.indexOf("Foo");//8--
// console.log(place2);


// var last = (people[people.length-1])//9
// console.log(last)

// var last = people[3]; ===

// Exercise 4;

let age = [20, 5, 12, 43, 98, 55];
let sum = age[0];
// for (i = 0; i < age.length; ++i) {
//     //2
//     // if ((age[i] % 2 === 0))
//     //     sum += age[i];
// }
sum = Math.max(...age);

console.log("the sum of all ages is: " + sum);