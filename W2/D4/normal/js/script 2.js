// Exercise 1:

// function checkDriverAge() {
//     let age = prompt("What is your age?");

//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// checkDriverAge();

// E1 BONUS:

// function checkDriverAge(age) {


//     if (Number(age) < 18) {
//         console.log("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         console.log("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// checkDriverAge(92);

// // Exercise 2;
// amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// function checkBasket(itemWanted) {
//     for (key in amazonBasket) {
//         if (key == itemWanted) {
//             let value = amazonBasket[key];
//             console.log(itemWanted + " is already in the basket " + value + " times")
//         }
//     }
// }
// itemWanted = prompt("What item would you like to add to your basket?")
// checkBasket(itemWanted);

// Exercise 3;
let cost = 4.25


function changeEnough([QuartersAmount, DimesAmount, NickelsAmount, PenniesAmount], cost) {
    let Quarters = 0.25
    let Dimes = 0.10
    let Nickels = 0.5
    let Pennies = 0.1

    checkTotal = (Quarters * QuartersAmount) + (DimesAmount * Dimes) + (NickelsAmount * Nickels) + (PenniesAmount * Pennies);

}

changeEnough([25, 20, 5, 0], 4.25);