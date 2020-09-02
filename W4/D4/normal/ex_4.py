magicians = ["Daniel", "Ronny", "Golda"]

def show_magicians():
    for magician in magicians: 
        print(f"{magician}")

def make_great():
    prepend_text = "the Great"
    magicians_mod = magicians
    for magician in magicians_mod:
        magician = prepend_text + " "+ magician
        print(magician)
    magicians = magicians_mod

def main():
    make_great()
    show_magicians()


if __name__ == '__main__':
    main()
