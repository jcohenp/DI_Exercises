let beersNumber = prompt("Enter the number of beers you can drink!")
let beerCounter = 1;
let firstLine = beersNumber + " " + "bottles of beer on the wall";
let secondLine = beersNumber + " " + "bottles of beer";
let thirdLine = beersNumber + " " + "Take" + " " + beerCounter + " " + "down, pass it around";
let lastLine = "We are out of beer!"

function beerline(beerline, beersNumber, beerCounter) {
    if (beerline == 1) {
        beerline = beersNumber + " " + "bottles of beer on the wall";
        let newline = document.createElement("DIV");
        newline.classList.add("beerLine");
        newline.innerHTML = beerline
        document.body.appendChild(newline);
    } else if (beerline == 2) {
        beerline = beersNumber + " " + "bottles of beer";
        let newline = document.createElement("DIV");
        newline.classList.add("beerLine");
        newline.innerHTML = beerline
        document.body.appendChild(newline);
    } else if (beerline == 3) {
        beerline = beersNumber + " " + "Take" + " " + beerCounter + " " + "down, pass it around";
        let newline = document.createElement("DIV");
        newline.classList.add("beerLine");
        newline.innerHTML = beerline
        document.body.appendChild(newline);
    } else {
        beerline = "We are out of beer!";
        let newline = document.createElement("DIV");
        newline.classList.add("beerLine");
        newline.innerHTML = beerline
        document.body.appendChild(newline);
    }

}

if (beersNumber != null) {
    beerline(1, beersNumber, beerCounter);
    beerline(2, beersNumber, beerCounter)
    beerline(3, beersNumber, beerCounter)
    beersNumber--;
    for ((beersNumber); beersNumber > 0; beersNumber--) {
        console.log(beersNumber + " " + beerCounter)
        beerline(1, beersNumber, beerCounter);
        beerline(1, beersNumber, beerCounter);
        beerline(2, beersNumber, beerCounter)
        beerline(3, beersNumber, beerCounter)
        beerCounter++;
    }
    beerline(lastLine, beersNumber, beerCounter)
    console.log(lastLine);
}