def get_input_for_decrypt():
    """""""""""
        get user input from user for en/decryption
    """""""""""
    input_str = str(input("Enter a text to encrypt, or decrypt!\n"))
    output = apply_shift(input_str, set_encryption(), set_shift_method(input_str))
    return output

def apply_shift(input_str, encryption = 3, shiftdirection = "e"):
    """""""""""
        This function de- and encrypts input text by shifting and returns it
        input_str: provided str
        encryption: by how many ascii values should the letters be shifted
        action = decrypt ("d") or encrypt ("e" - standard) 
    """""""""""
    output = []
    # decryption reverses shiftdirection
    shiftdirection = [+encryption, -encryption]
    if shiftdirection == 'd':
        shiftdirection = [-encryption, +encryption]
    # encypher/decypher
    for step in shiftdirection:
        for letter in input_str:
            encypher = ord(letter) + step
            decypher = chr(encypher)
            output.append(decypher)
        return ''.join(output)

def set_encryption(encryption = 3):
    """""""""""
        Set encryption. returns arguments for apply_shift method, standard is 3
    """""""""""
    encryption = int(input("What is the decryption cypher (choose a positive number)?\n"))
    return encryption

def set_shift_method(input_str):
    """""""""""
        Set direction. Asks user for shiftdirection argument for apply_shift function
    """""""""""
    shiftdirection = str(input("Enter 'e' for encryption, 'd' for decryption\n"))
    if shiftdirection == "e" or shiftdirection == "d":
        return shiftdirection
    else:
        print("you didn't say if you want to en- or decrypt")
        set_shift_method(input_str)


def main():
    text = get_input_for_decrypt()
    print(f"The new text is: {text}")

if __name__ == "__main__":
    main()
