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



let building = {
        number_levels: 4,
        number_of_apt_by_level: {
            "1": 3,
            "2": 4,
            "3": 9,
            "4": 2,
        },
        name_of_tenants: ["Sarah", "Dan", "David"],
        number_of_rooms_and_rent: {
            "Sarah": [3, 2000],
            "Dan": [4, 1000],
            "David": [1, 10],
        },
    }
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

// Display the name of the second tenant and the number of rooms he has in his apartment
tenantNumber = 2;
for (let key in building.number_of_apt_by_level) {
    if (key <= (tenantNumber - 1)) {
        let value1 = building.number_of_rooms_and_rent[key];
        console.log(key + " has " + value1);
    }
}
// console.log(building.name_of_tenants[1] + " has " + building.number_of_rooms_and_rent);