function myMove() {
    let box = document.getElementById("animate");
    let container = document.getElementById("container");
    container.style.position = relative;
    let speed = 1;
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 100 - box.width) {
            clearInterval(id);
        } else {
            pos += speed;
            box.style.left = pos + "%"
        }
    }

}