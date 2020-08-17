let nono = ["programming", "is", "not", "bad"];
let firststr = nono[nono.indexOf("not")];
if (nono[nono.indexOf("not") + 1] === "bad") {
    delete nono[nono.indexOf("not") + 1];
    nono[nono.indexOf("not")] = "good";
    console.log(nono.join(" "));
} else {
    console.log(nono.join(" "));
}