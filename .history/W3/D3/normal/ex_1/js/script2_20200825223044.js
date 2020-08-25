parent = document.getElementById("container");
parent.style.display = "flex";
parent.style.width = "100%";
parent.style.height = "500px";


for (boxnr = 0; boxnr < 26; ++boxnr) {
    let box = document.createElement("div");
    box.setAttribute("id", boxnr);
    box.classList.add("draggable")
    box.setAttribute("draggable", "true");
    box.setAttribute("ondragstart", "dragStart(event);")
    box.setAttribute("ondragover", "dragOver(event)")
    box.setAttribute("ondrop", "onDrop(event)")
    box.classList.add("dropzone")
    box.style.width = "100px";
    box.style.height = "20px";
    box.style.margin = "10px";
    box.style.textAlign = "center"
    box.style.border = "2px solid black";
    box.innerHTML = String.fromCharCode(65 + boxnr)
    parent.appendChild(box);
}

function dragStart(event) {
    event
    dataTransfer
        .setData('text/plain', event.target.id);

    event
        .currentTarget
        .backgroundColor = 'yellow';

}

function dragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event
    dataTransfer.getData.getData('text')

    const draggableElement = document.getElementById(id);

    const dropzone = event.target;

    event
        .dataTransfer
        .clearData();
}