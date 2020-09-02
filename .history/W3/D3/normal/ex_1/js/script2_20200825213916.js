parent = document.getElementById("container");
parent.style.display = "flex";

for (boxnr = 97; boxnr < (97 + 26); ++boxnr) {
    let box = document.createElement("div");
    box.setAttribute("id", boxnr);
    box.innerHTML = boxnr.toString;
    parent.appendChild(box);
}