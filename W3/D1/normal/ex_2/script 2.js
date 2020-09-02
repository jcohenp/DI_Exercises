let fChild = document.getElementsByTagName("ul")[0];
let sChild = document.getElementsByTagName("ul")[1];
console.log(fChild);
console.log(fChild.lastElementChild);
let liCHange = fChild.lastElementChild;
liCHange.innerHTML = "Richard";
let liCHange2 = sChild.firstElementChild;
liCHange2.innerHTML = "Roy";
var li1 = document.createElement("li");
var li2 = document.createElement("li");
li1.innerHTML = "Hey Students";
li2.innerHTML = "Hey Students";
fChild.appendChild(li1);
sChild.appendChild(li2);
sChild.childNodes[3].remove()