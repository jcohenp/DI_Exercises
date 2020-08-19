///chose to use this for testing instead of the prompts..
let InputStatement = "Cool,that,it,workss";

const promptUserAndReturnSplicedArray = () => {
    InputStatement = prompt("Please enter a sentence or phrase separated by commas)");
    if (InputStatement.length == 0) {
        console.log("Sure you dont want to place anything in this beautiful frame? Y/N");
        repeat = false;
        pResponse = prompt("Y/N?");
        if (pResponse == "Y") {
            promptUser()
        } else {
            return; //exit function and continue
        }
    }
    InputStatement = InputStatement.split(",")
    console.log(InputStatement);
    return InputStatement;
}
const findAndReturnLongestinArray = (array) => {
    let longestElement = 0;
    for (element = 0; element < array.length; ++element) {
        // console.log(array[element].length)
        if (array[element].length > longestElement) {
            longestElement = array[element].length;
        }
    }
    // console.log("longest element: " + longestElement)
    return longestElement;
}


const formatFrame = (array) => {
    //string for each line to print (composing each line first then printing)
    let lineLogged = [];

    // modify InputStatement to ask for prompt or use given value
    if (typeof array != "string" || array.length == 0) {
        console.log("not a given string");
        array = promptUserAndReturnSplicedArray();
    } else {
        array = InputStatement.split(",");
    }
    //generate first *line
    for (amountStars = 0; amountStars < (findAndReturnLongestinArray(array) + 4); ++amountStars) {
        linePart = "*";
        newlineLogged = lineLogged.push(linePart);
    }
    // print first *line
    lineLogged = lineLogged.join("")
    console.log(lineLogged);

    //reset lineLogged
    lineLogged = [];

    for (let element in array) {
        linelogged = lineLogged.push("* ", array[element]);
        // get the space to the end of frame 
        let rightSpaceLength = findAndReturnLongestinArray(array) - array[element].length;
        // console.log(rightSpaceLength); //works
        for (spaceAmount = 0; spaceAmount < rightSpaceLength; ++spaceAmount) {
            linePart = " ";
            newlineLogged = lineLogged.push(linePart);
        }
        linePart = " *";
        linelogged = lineLogged.push(linePart);
        lineLogged = lineLogged.join("")
        console.log(lineLogged)
            //reset lineLogged again
        lineLogged = [];
        // console.log(array[element])
    }
    //generate first *line
    for (amountStars = 0; amountStars < (findAndReturnLongestinArray(array) + 4); ++amountStars) {
        linePart = "*";
        newlineLogged = lineLogged.push(linePart);
    }
    // print first *line
    lineLogged = lineLogged.join("")
    console.log(lineLogged);

}


formatFrame(InputStatement);
// console.log(findAndReturnLongestinArray(InputStatement));