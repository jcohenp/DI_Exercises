parent = document.getElementById("container");
parent.style.display = "flex";

for (boxnr = 0; boxnr < 26; ++boxnr) {
    let box = document.createElement("div");
    box.setAttribute("id", boxnr);
    box.style.width = "70px";
    box.style.height = "70px"
    box.innerHTML = String.fromCharCode(65 + boxnr)
    parent.appendChild(box);
}