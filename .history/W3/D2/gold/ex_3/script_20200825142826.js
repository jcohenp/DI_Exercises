options = document.getElementById("option")[0].value;

let genres = document.querySelector("genres");
let newOption = document.create("option");
newOption.value = "classic";
newOption.innerHTML = "Classic";
genres.appendChild(newOption);
console.log(options);