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
    formField.value = "hello123"
    formField.name = "formField";
    let itemValue = formField.value;
    inputForm.appendChild(formField);
    styleAll(formField);

    let button = document.createElement("button");
    styleAll(button);
    button.innerHTML = "+ Add";
    button.id = ("addButton");
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.addEventListener('click', function(e) {
        console.log('Enter')
        createListItem(itemValue);
    });
    formField.addEventListener('keypress', function(e) {
        if (e.key === 13) {
            console.log("Enter");
            createListItem(itemValue);
        } else {
            console.log("keypress");
        }
    });
    inputForm.appendChild(button);




    let buttonClear = document.createElement("button");
    styleAll(buttonClear);
    buttonClear.innerHTML = "CLEAR ALL";
    inputForm.appendChild(buttonClear);
    buttonClear.style.backgroundColor = "yellow";
    buttonClear.style.color = "black";
}


function createListItem(itemValue) {
    parent = document.getElementById("root");
    let newItem2 = document.createElement("div");
    console.log(itemValue);
    newItem2.innerHTML = itemValue;
    newItem2.style.backgroundColor = "white";
    console.log("ItemCreate " + itemValue);
    console.log("createListItem " + newItem2);
    styleAll(newItem2);
    parent.appendChild(newItem2);
}



createForm();