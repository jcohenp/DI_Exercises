document.body.style.fontSize = "3rem";
let divChange = document.querySelector("div");
divChange.style.backgroundColor = "lightblue";
divChange.style.padding = "2em";
let liItem = document.querySelector("li");
liItem.remove();
let liItem2 = document.querySelector("li");
liItem2.style.border = "2px solid red";

let x = document.createElement("li");
let y = document.createElement("li");
let ul = document.querySelector("ul");

x.innerHTML = "John";
y.innerHTML = "Pete";

ul.appendChild(x, y);

if (divChange.style.backgroundColor == "lightblue") {
    alert('hello ' + x.innerHTML + " and " + y.innerHTML)
}