parent = document.getElementById("container");
parent.style.display = "flex";

for (boxnr = 0; boxnr < 26; ++boxnr) {
    let box = document.createElement("div");
    box.setAttribute("id", boxnr);
    box.innerHTML = (boxnr + 10).toString;
    parent.appendChild(box);
}