const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

//   console.log(Object.keys(GUEST_LIST));
//   console.log(Object.values(GUEST_LIST));
var x = prompt("What's your name");
if (x in GUEST_LIST) {
    console.log("Hi I am " + x + " and I'm from " + GUEST_LIST[x])
} else {
    console.log("I AM A GUEST :( ")
}