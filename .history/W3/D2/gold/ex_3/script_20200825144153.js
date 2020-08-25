removeColor() {
    let option = document.querySelectorAll("options")
    for (i in option) {
        if (option.selected == true) {
            option[i].remove()
        }
    }
}