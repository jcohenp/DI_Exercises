let secretWord = "javascript";

function checkWord(word, guessedLetters, solutionWord, lives) {
    letterGuess = prompt("Guess a letter");
    if ((letterGuess != null)) {
        letterGuess = letterGuess.toLowerCase();
        letterGuessArr = letterGuess.split("")
        console.log(letterGuessArr);
        if (guessedLetters.includes(letterGuess) == true) {
            console.log("You already guessed that one");
            checkWord(word, guessedLetters, solutionWord, lives);
        } else if (solutionWord.includes(letterGuess) == true) {
            console.log("Great choice!");
            for (i = 0; i < solutionWord.length; ++i) {
                if (solutionWord[i] == letterGuess) {
                    indexLetter = i;
                    word[i] = letterGuess;
                }
            }
            lives++;
            console.log(word);
            guessedLetter = guessedLetters.push(letterGuess);
        } else {
            console.log("That letter is not in there");
            letterGuessArrNew = letterGuessArr.push(letterGuess);
            console.log(guessedLetters)
            lives--;
            console.log("You have " + lives + " lives left");
        }
    }
}

function hangMan() {
    let word = prompt("Player 1 Enter a word with at least 8 letters");
    if ((word != null)) {
        word = word.toLowerCase();
        let solutionWord = word;
        let guessedLetters = []
        let lives = 10;

        let splitWord = word.split('');
        if (splitWord.length > 8) {
            for (characters in splitWord) {
                splitWord[characters] = "*";
            }
            word = splitWord;
            console.log(splitWord);
            for (lives; lives >= 0; --lives) {
                // console.log(word)
                if (word.includes("*") == false) {
                    console.log("YOU WON!!! GREAT SUCCESS!!!")
                    document.write("<h1>😎</h1>")
                    return;
                }
                if ((lives == 0) && (word != solutionWord)) {
                    console.log("GAME OVER, YOU LOST!!!")
                    document.write("<h1>😭</h1>")
                    break;
                } else if ((lives >= 1) && (word != solutionWord)) {
                    checkWord(splitWord, guessedLetters, solutionWord, lives)
                }
            }
        } else {
            console.log("Enter a valid word please!")
            hangMan()
        }
    }
}

hangMan();