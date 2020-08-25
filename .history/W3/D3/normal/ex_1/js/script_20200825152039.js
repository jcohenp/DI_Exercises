function myMove() {
    let box = document.getElementById("animate");
    let speed = 1;
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 100 - box.width) {
            clearInterval(id);
        } else {
            pos++;
            box.style.left = pos + "%"
        }
    }

}