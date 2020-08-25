options = document.getElementsByTagName("option")[0].value;

let genres = document.querySelector("genres");
let newOption = document.Element("option");
newOption.value = "classic";
newOption.innerHTML = "Classic";
genres.appendChild(newOption);
console.log(options);