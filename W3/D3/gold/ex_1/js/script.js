document.body.style.backgroundColor = "black";
document.body.style.margin = "25%";
document.body.style.display = "flex";
document.body.style.textAlign = "center";

function styleAll(element) {
    element.style.lineHeight = "2em";
    element.style.height = "4.5em";
    element.style.width = "15em";
    element.style.borderRadius = "10px"
    element.style.border = "none";
    element.style.margin = "1em"
    element.style.textAlign = "center";
    element.style.fontWeight = "bold"
    element.style.fontSize = "1.2em"

}

function createForm() {
    let root = document.getElementById("root");
    let inputForm = document.createElement("form");
    root.appendChild(inputForm);

    let formField = document.createElement("input");
    formField.type = "text";
    formField.value = "Enter what you want to buy";
    formField.name = "formField";
    let itemValue = formField.value;
    formField.addEventListener("click", function(itemValue) {
        console.log(itemValue)
        formField.value = "";

        return
    });
    inputForm.appendChild(formField);
    styleAll(formField);

    let button = document.createElement("button");
    button.innerHTML = "+ Add";
    inputForm.appendChild(button);
    styleAll(button);
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.addEventListener("click", addItem(itemValue));

    let buttonClear = document.createElement("button");
    buttonClear.innerHTML = "CLEAR ALL";
    inputForm.appendChild(buttonClear);
    styleAll(buttonClear);
    buttonClear.style.backgroundColor = "yellow";
    buttonClear.style.color = "black";
}

function createListItem(itemValue, itemAmount) {
    let newItem = document.createElement("div");
    newItem.innerHTML = itemValue;
    styleAll(newItem);
    root.appendChild(newItem);
}

function addItem(itemValue) {
    if ((itemValue != null) && (itemValue != "Enter what you want to buy")) {
        console.log(itemValue);
        createListItem(itemValue);
    }
}

createForm()