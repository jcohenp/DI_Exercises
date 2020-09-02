// // Exercise 1;

// const GUEST_LIST = {
//     Randy: "Germany",
//     Karla: "France",
//     Wendy: "Japan",
//     Norman: "England",
//     Sam: "Argentina"
// }

// //   console.log(Object.keys(GUEST_LIST));
// //   console.log(Object.values(GUEST_LIST));
// var x = prompt("What's your name");
// if (x in GUEST_LIST) {
//     console.log("Hi I am " + x + " and I'm from " + GUEST_LIST[x])
// } else {
//     console.log("Hi! I', a guest :( ")
// }


// Exercise2 ;

// const FAMILY = {
//     famMember1: "Isaac",
//     famMember2: "Ron",
//     famMember3: "Rodney",
//     famMember4: "Dovid",
//     famMember5: "Daniel",
// }

// console.log(Object.keys(FAMILY));
// console.log(Object.values(FAMILY));

// Exercise 3;



// let building = {
//         number_levels: 4,
//         number_of_apt_by_level: {
//             "1": 3,
//             "2": 4,
//             "3": 9,
//             "4": 2,
//         },
//         name_of_tenants: ["Sarah", "Dan", "David"],
//         number_of_rooms_and_rent: {
//             "Sarah": [3, 2000],
//             "Dan": [4, 1000],
//             "David": [1, 10],
//         },
//     }
// Display the number of levels in the building
// console.log(building.number_levels);
// Display how many apartments are on level 1 and 3.
// minFloor = 1;
// maxFloor = 3;
// for (let key in building.number_of_apt_by_level) {
//     if (key <= maxFloor) {
//         let value = building.number_of_apt_by_level[key];
//         console.log(key + ":" + value)
//     }
// 

// // Display the name of the second tenant and the number of rooms he has in his apartment
// tenantNumber = 2;
// console.log(building.name_of_tenants[1] + " has " + building.number_of_rooms_and_rent.Dan[0])

// let rentDavid = building.number_of_rooms_and_rent.David[1];
// let rentSarah = building.number_of_rooms_and_rent.Sarah[1];
// let rentDan = building.number_of_rooms_and_rent.Dan[1];

// if (rentDavid + rentSarah > rentDan) {
//     while (rentDavid + rentSarah > rentDan) {
//         rentDan = prompt("Hey, the rent of your David is not the same, please enter a new price");
//     }
// } else {
//     alert("David pays more than Sarah");
// }

// Exercise 4;
function calculateBMI(person, mass, height) {
    let bmi = person.mass / (person.height ** 2);
    bmi = bmi * 10000;
    // console.log(bmi);
    person.bmi = bmi;
    return person.bmi;
}

function CompareBMI(person1, person2) {
    if (calculateBMI(person1, person1.mass, person1.height) < calculateBMI(person2, person2.mass, person2.height)) {
        console.log(person1.fullName + " needs a diet");
    } else {
        console.log(person2.fullName + " needs a diet");
    }
}

let person1 = {
    fullName: "Max Musterman",
    mass: 100,
    height: 183,
    bmi: 0,
}
let person2 = {
    fullName: "James Bond",
    mass: 80,
    height: 170,
    bmi: 0,
}

CompareBMI(person1, person2)
    // console.log(Object.keys(person1));
    // console.log(Object.values(person1))