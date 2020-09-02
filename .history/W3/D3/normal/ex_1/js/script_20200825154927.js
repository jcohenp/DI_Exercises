function myMove() {
    let box = document.getElementById("animate");

    let speed = 1;
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos += speed;
            box.style.left = pos + "px"
        }
    }

}

function myDrag() {
    let box = document.getElementById("animate");
    box.style.backgroundColor = "blue";


    // let speed = 1;
    // var pos = 0;
    // var id = setInterval(frame, 5);

    // function frame() {
    //     if (pos == 350) {
    //         clearInterval(id);
    //     } else {
    //         pos += speed;
    //         box.style.left = pos + "px"
    //     }
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
    document.getElementById("animate").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("animate").innerHTML = "The p element was dropped";
}