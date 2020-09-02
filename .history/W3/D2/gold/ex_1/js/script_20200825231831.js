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
    element.style.fontSize = "1.2em";

}

function createForm() {
    let root = document.getElementById("root");
    let inputForm = document.createElement("form");
    root.appendChild(inputForm);

    let formField = document.createElement("input");
    styleAll(formField);
    formField.type = "text";
    formField.placeholder = "Enter what you want to buy";

    formField.name = "formField";
    let itemValue = formField.value;
    inputForm.appendChild(formField);

    let button = document.createElement("button");
    styleAll(button);
    button.innerHTML = "+ Add";
    button.id = ("addButton");
    button.style.backgroundColor = "green";
    button.style.color = "white";
    inputForm.appendChild(button);




    let buttonClear = document.createElement("button");
    styleAll(buttonClear);
    buttonClear.innerHTML = "CLEAR ALL";
    inputForm.appendChild(buttonClear);
    buttonClear.style.backgroundColor = "yellow";
    buttonClear.style.color = "black";

    button.addEventListener('click', createListItem)
    formField.addEventListener('keyup', addItem)

    function addItem() {
        if (keyup === "Enter") {
            createListItem()
        }
    }

    function createListItem() {
        parent = document.getElementById("root");
        let newItem = document.createElement("div");
        styleAll(newItem);
        console.log(itemValue);
        newItem.innerHTML = itemValue;
        newItem.style.color = "white";
        console.log("ItemCreate " + itemValue);
        console.log("createListItem " + newItem);
        parent.appendChild(newItem);
    }
    console.log(itemValue)
}





createForm();