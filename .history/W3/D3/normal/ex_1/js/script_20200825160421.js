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

function myDrag(ev) {
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

// $(".drag").draggable();