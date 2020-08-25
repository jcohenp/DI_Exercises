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
    formField.placeholder = "Enter what you want to buy";
    // formField.value = "hello123"
    formField.name = "formField";
    let itemValue = formField.value;
    inputForm.appendChild(formField);
    styleAll(formField);

    let button = document.createElement("button");
    button.innerHTML = "+ Add";
    styleAll(button);
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.addEventListener('click', function(e) {
        console.log("C")
        addItem(itemValue);
    });
    inputForm.appendChild(button);


    function addItem(itemValue) {
        if (itemValue != null) {
            console.log("item " + itemValue);
            createListItem(itemValue);
        }
    }

    let buttonClear = document.createElement("button");
    buttonClear.innerHTML = "CLEAR ALL";
    inputForm.appendChild(buttonClear);
    styleAll(buttonClear);
    buttonClear.style.backgroundColor = "yellow";
    buttonClear.style.color = "black";
}


function createListItem(itemValue) {
    parent = document.getElementById("root");
    let newItem = document.createElement("div");
    newItem.innerHTML = itemValue;
    newItem.style.color = "white"
    console.log("ItemCreate " + itemValue);
    console.log("createListItem " + newItem);
    styleAll(newItem);
    parent.appendChild(newItem);
}



createForm()