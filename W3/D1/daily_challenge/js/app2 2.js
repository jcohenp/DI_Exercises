// let body = document.body;
let planet = ["Uranus", "Neptune", "Pluton"];
// var div = document.createElement("div");

for (var c in planet) {
    var newElement = document.createElement("div");
    newElement.id = planet[c];
    newElement.className = "planet bg" + [c];
    newElement.innerHTML = planet[c];
    newElement.classList.add("planet-animation");
    document.body.prepend(newElement);
}

document.querySelector("#Neptune").style.marginLeft = "52px";

var moon = document.createElement("div");

moon.id = "moon";
moon.classList.add("moon");
moon.innerHTML = "<p>Luna</p>";
document.body.prepend(moon);

moon.style.left = "400px";

// body.prepend(element);// div.classList.add("planet");