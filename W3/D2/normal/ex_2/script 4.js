var bold;
var p = document.querySelector("p");

function getBold_items() {
    bold = document.getElementsByTagName("strong");
}

function highlight() {
    getBold_items();
    for (i = 0; i < bold.length; ++i) {
        bold[i].style.color = "blue";
    }
}

function return_normal() {
    getBold_items();
    for (i = 0; i < bold.length; ++i) {
        bold[i].style.color = "black";
    }
}

p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", return_normal)