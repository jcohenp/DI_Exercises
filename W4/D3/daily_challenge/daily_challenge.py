def encrypt_and_decrypt(input_str, encryption = 3, shiftdirection = "e"):
    """""""""""
    This function de- and encrypts input text by shifting and returns it
        input_str: provided str
        encryption: by how many ascii values should the letters be shifted
        action = decrypt ("d") or encrypt ("e" - standard) 
    """""""""""
    output = []
    # decryption reverses shiftdirection
    encryptdirection = [+encryption, -encryption]
    if shiftdirection == 'd':
        encryptdirection = [-encryption, +encryption]
    # encypher/decypher
    for step in encryptdirection:
        for letter in input_str:
            encypher = ord(letter) + step
            decypher = chr(encypher)
            output.append(decypher)
        return ''.join(output)

def get_input_for_decrypt():
    input_str = str(input("Enter a text to encrypt, or decrypt!\n"))
    encrypt_or_decrypt = str(input("Enter 'e' for encryption, 'd' for decryption\n"))
    if encrypt_or_decrypt =="e":
        print(f"The encrypted text is: {encrypt_and_decrypt(input_str)} \n")
    elif encrypt_or_decrypt =="d":
        encryption = int(input("What is the decryption cypher?\n"))
        print(
            f"The decrypted text is: {encrypt_and_decrypt(input_str, 3, 'd')} \n")
    else: get_input_for_decrypt()

def main():
    get_input_for_decrypt()

if __name__ == "__main__":
    main()