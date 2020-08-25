function myMove() {
    let box = document.getElementById("animate");
    let container = document.getElementById("container");
    container.style.position = "relative";
    box.style.position = "absolute";
    box.style.width = "50px"
    let speed = 1;
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 100) {
            clearInterval(id);
        } else {
            pos += speed;
            box.style.left = pos + "%"
        }
    }

}