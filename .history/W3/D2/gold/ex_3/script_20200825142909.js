options = document.getElementsByTagName("option")[0].value;

let genres = document.querySelector("genres");
let newOption = document.createElement("option");
newOption.value = "classic";
newOption.innerHTML = "Classic";
genres.appendChild(newOption);
console.log(options);