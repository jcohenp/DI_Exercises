let input = document.getElementsByTagName("input");

input.addEventListener("keypress", keyPress)
val = input.value

function keyPress(e) {
    if (((e >= 97) && (e <= 122)) || ((e >= 65) && (e <= 90))) {
        val.concat(e);
    } else {
        return false
    }
}