parent = document.getElementById("container");
parent.style.display = "flex";

for (boxnr = 'a'; boxnr < 'z'; ++boxnr) {
    let box = document.createElement("div");
    box.setAttribute("id", boxnr);
    box.innerHTML = boxnr;
    parent.appendChild(box);
}