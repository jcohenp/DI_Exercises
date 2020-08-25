parent = document.getElementById("container");
parent.style.display = "flex";

for (boxnr = a; boxnr < z; ++boxnr) {
    let box = document.createElement("div");
    box.setAttribute("id", boxnr);
    parent.appendChild(box);
}