let navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");
let newLi = document.createElement("li");
let logoutNode = document.createTextNode("Logout");
// navBar.appendChild(newLi);
let uoList = document.querySelector("ul");
var anchor = document.createElement("a");
anchor.setAttribute("href", "Logout.html")
anchor.appendChild(logoutNode);
newLi.appendChild(anchor)
uoList.appendChild(newLi);

// can't use first/last child due to whitespace added by VS on uolist
let fChild = document.querySelector("li").innerHTML;
let lChild = uoList.lastChild.innerHTML
console.log(fChild);
console.log(lChild);
console.log(navBar)
let newUl = document.createElement("UL");
let new2Li = document.createElement("LI");
newUl.classList.add("newUl");
new2Li.applendChild(fChild)
newUl.appendChild(new2Li);