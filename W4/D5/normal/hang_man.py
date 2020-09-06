# Hangman
import random


def hang_man(lives):
    """""""""""
    hangman-game
    arg: lives 
    """""""""""
    word = generate_random_word().upper()
    wrong_letters = []
    correct_letters = []

    print(f"DEBUG: {word}")
    print("Welcome to hang man!")
    secret_word = return_blank_word(word)
    print(f"Guess this word {secret_word}, {len(secret_word)} letters long")
    while secret_word is not word and lives > 0:
        try:
            guessed_letter = guess_letter()
            new_secret_word = match_guessed(word, guessed_letter, correct_letters, wrong_letters, secret_word)
            print(new_secret_word)
            if new_secret_word == secret_word:
                lives -= 1
                print(f"You have {lives} lives left")
            secret_word = new_secret_word
        except Exception:
            print(Exception)
        if secret_word == word:
            print("YOU WON!!!")
            break
        elif lives == 0:
            print("Game Over!")
            break
        

def match_guessed(word, guessed_letter, correct_letters, wrong_letters, secret_word):
    """""""""""""""""
    checks if the guessed letter is in the string and returns secret_word
    args:
    word: word to check
    guessed letter: single char value
    correct_letters : list or string
    wrong_letters : list or string
    secret_word: secret_word to compare with word
    """""""""""""""""
    try:
        if guessed_letter in word and guessed_letter not in correct_letters:
            correct_letters.append(guessed_letter)
        elif guessed_letter in wrong_letters:
            print(f"Letters you have already used: {wrong_letters}!")
        else:
            wrong_letters.append(guessed_letter)
            print(f"Oh oh! this letter is not in the word!")
        secret_word = update_secret_word(word, secret_word, correct_letters, guessed_letter)
        return secret_word
    except Exception:
        print(Exception)


def update_secret_word(word, secret_word, correct_letters, guessed_letter):
    """""""""
    updates secret word based on correct letters and returns it
    """""""""
    secret_word = ""
    for letter in range(len(word)):
        if word[letter] == guessed_letter or word[letter] in correct_letters:
            secret_word += word[letter]
        else:
            secret_word += "_"
    return secret_word


def generate_random_word():
    """""""""""
    generates random word from word list and returns it
    """""""""""
    words_list = ['correction', 'childish', 'beach', 'python', 'assertive',
                  'interference', 'complete', 'share',
                 'credit card', 'rush', 'south']
    word = random.choice(words_list)
        
    return word


def guess_letter():
    """""""""
    asks for word input
    """""""""
    try: 
        guessed_letter = str(input("Enter a letter\n").upper().strip())
        if not None:
            return guessed_letter
    except ValueError:
        print("Not a letter! try again!")
        guess_letter()


def return_blank_word(word):
    """""
    returns length of word in underscores
    """""
    blanked_word = ("_"*len(word))
    return blanked_word


def main():
    hang_man(6)


if __name__ == "__main__":
    main()
