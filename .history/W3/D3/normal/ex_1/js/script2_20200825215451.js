parent = document.getElementById("container");
parent.style.display = "flex";

for (boxnr = 0; boxnr < 26; ++boxnr) {
    let box = document.createElement("div");
    box.setAttribute("id", boxnr);
    box.classList.add("draggable")
    box.setAttribute("draggable", "true");
    box.setAttribute("ondragstart", "dragStart()")
    box.classList.add("dropzone")
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.border = "2px solid black";
    box.innerHTML = String.fromCharCode(65 + boxnr)
    parent.appendChild(box);
}

function dragStart(event) {
    event
    dataTransfer
        .setData('text/plain', event.target.id)

    event
        .currentTarget
        .backgroundColor = 'yellow'

}