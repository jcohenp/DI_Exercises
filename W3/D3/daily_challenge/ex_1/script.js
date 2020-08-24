element = document.createElement("DIV");
element.style.height = "100px";
element.style.width = "100px";
element.style.backgroundColor = "red";
document.body.appendChild(element);

element.addEventListener("click", function() {
    element.style.marginLeft = "200px";
})

element.addEventListener("dblclick", function() {
    element.style.width = "600px";
})

element.addEventListener("keyup", function() {
    element.style.backgroundColor = "blue";
})

element.addEventListener("mouseover", function() {
    element.innerHTML = "This Happened";
})

element.addEventListener("mouseout", function() {
    element.innerHTML = null;
})

element.addEventListener("wheel", function() {
    element.style.marginTop = "10em"
})

element.addEventListener("mouseenter", function() {
    element.style.borderRadius = "100%"
})