button = document.getElementsByTagName("input");
button.addEventListener("click", removeColor())

removeColor() {
    let option = document.querySelectorAll("options")
    for (i in option) {
        if (option.selected == true) {
            console.log(color)
            option[i].remove()
        }
    }
}