parent = document.getElementById("container");
parent.style.display = "flex";

for (boxnr = 0; boxnr < 26; ++boxnr) {
    let box = document.createElement("div");
    box.setAttribute("id", boxnr);
    box.innerHTML = String.fromCharCode(94 + boxnr)
    parent.appendChild(box);
}