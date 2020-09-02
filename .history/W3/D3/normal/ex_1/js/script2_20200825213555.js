parent = document.getElementById("container");
parent.style.display = "flex";

for (boxnr = 65; boxnr < (91); ++boxnr) {
    let box = document.createElement("div");
    box.setAttribute("id", boxnr);
    box.innerHTML = boxnr.toString;
    parent.appendChild(box);
}

x = 65;
x.toString