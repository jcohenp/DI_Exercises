parent = document.getElementById("container");
parent.style.display = "flex";
parent.style.width = "100%";
parent.style.height = "500px";


for (boxnr = 0; boxnr < 26; ++boxnr) {
    let box = document.createElement("div");
    box.setAttribute("id", boxnr);
    box.classList.add("draggable")
    box.setAttribute("draggable", "true");
    box.setAttribute("ondragstart", "drag(event);")
    box.setAttribute("ondragover", "allowDrop(event)")
    box.setAttribute("ondrop", "drop(event)")
    box.classList.add("dropzone")
    box.style.width = "100px";
    box.style.height = 50 px ";
    box.style.margin = "10px";
    box.style.textAlign = "center"
    box.style.border = "2px solid black";
    box.innerHTML = String.fromCharCode(65 + boxnr)
    parent.appendChild(box);
}

function allowDrop(allowdropevent) {
    allowdropevent.target.style.color = 'blue';
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.className);
    dragevent.target.style.fontSize = '2em';

}

function drop(dropevent) {
    dropevent.preventDefault();
    var data = dropevent.dataTransfer.getData("text");
    dropevent.target.appendChild(document.getElementsByClassName(data));
    document.getElementsByClassName("draggable").style.color = 'black';
}