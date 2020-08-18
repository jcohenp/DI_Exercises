let arrayColors = ["black", "green", "blue", "red", "indigo"];
let st = ["st", "nd", "rd", "th"];
for (i = 0; i < arrayColors.length; ++i) {
    stNum = i + 1;
    if (i > 3) {
        k = 3;
    } else {
        k = i;
    }


    console.log("My " + stNum + st[k] + " choice is " + arrayColors[i]);
}