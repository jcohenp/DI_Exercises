let articleLength = document.querySelectorAll("p").length;
let article = document.querySelectorAll("p");
for (articleElement = 0; articleElement < articleLength; ++articleElement) {
    document.querySelectorAll("p")[articleElement].classList.add("para_article");
};
let articleparent = document.querySelector("article");
articleparent.removeChild(articleparent.lastElementChild)

let h2 = document.querySelector("h2");
h2.addEventListener("click", function() {
    h2.remove();
});

let h1 = document.querySelector("h1");
h1.style.fontSize = Math.floor(Math.random() * 100) + "px";

let p1 = document.querySelector("p");
p1.addEventListener("click", function() {
    p1.style.display = "none";
});
let p2 = document.getElementsByTagName("p")[1];
console.log(p2);
p2.addEventListener("click", function() {
    window.setInterval(function() {
        if (!p2.style.opacity) {
            p2.style.opacity = 1;
        }
        if (p2.style.opacity) {
            p2.style.opacity -= 0.1;
        } else {
            clearInterval(window)
        }
    }, 200)

})

let inputUserName = document.getElementsByName("userName")[0].value;
let inputQuestionToUser = document.getElementsByName("questionToUser")[0].value;

let div = document.createElement("div");
div.setAttribute("id", "tbl");
div.style.width = "50%";
div.style.margin = "50px";
div.style.textAlign = "center";
let table = document.createElement("table");

document.body.appendChild(div);

let button = document.createElement("button");
button.innerHTML = "Submit";


document.body.appendChild(button);


table.style.border = "1px solid black";
table.innerHTML =
    "<tr>" + "<th>Name</th>" + "<th>Answer</th>" + "</tr>" +
    "<tr>" + "<td>" + inputUserName + "</td>" + "<td>" + inputQuestionToUser + "</td>" + "</tr>";
div.appendChild(table);