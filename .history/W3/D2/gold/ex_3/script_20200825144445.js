button = document.getElementsByTagName("input");
button.addEventListener("click", removeColor())

removeColor() {
    let option = document.querySelectorAll("colorSelect")
    color.remove(color.selectedIndex)
}