parent = document.getElementById("container");
parent.style.display = "flex";

for (boxnr = 0; boxnr < 26; ++boxnr) {
    let box = document.createElement("div");
    box.setAttribute("id", boxnr);
    box.style.width = "50px";
    box.style.height = "50px"
    l
    box.style.border = "2px solid black"
    box.innerHTML = String.fromCharCode(65 + boxnr)
    parent.appendChild(box);
}