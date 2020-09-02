let allBooks = {
    book1: {
        "title": "The Davinci Code",
        "author": "Dan Brown",
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3855/9780385504201.jpg",
        "read": false,
    },
    book2: {
        "title": "The Alchemist",
        "author": "Paulo Celho",
        "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0071/9780007155668.jpg",
        "read": true,
    }
}


let bodyTag = document.getElementsByTagName("body")[0];
let bookshelf = document.createElement("DIV");
bookshelf.classList.add("bookshelf");
bookshelf.style.margin = "0px";
bookshelf.style.textAlign = "center"
bookshelf.style.width = "60%";
bookshelf.style.display = "flex";

console.log(bodyTag)
bodyTag.prepend(bookshelf);
let book = document.createElement("div");


for (let key in allBooks) {
    // let bookKey = allBooks[key];
    console.log(allBooks[key])
    book = document.createElement("div");
    book.innerHTML = allBooks[key].title + " written by " + allBooks[key].author;
    bookshelf.appendChild(book)
    img = document.createElement("img");
    img.src = allBooks[key].image;
    img.style.width = "100px";
    img.style.padding = "1em";
    book.style.border = "4px solid grey";
    book.style.margin = "1em";
    if (allBooks[key].read == true) {
        book.style.border = "4px solid green";
    }
    book.appendChild(img);
}