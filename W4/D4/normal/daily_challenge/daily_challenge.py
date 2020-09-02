matrix = [["7"," ","3"],
["T","s","i"],
["h","%","x"],
["i"," "," "],
["s","M"," "],
["$","a"," "],
["#","t","%"],
["i","r","!"],
]

def read_matrix():
    output = ""
    for line in range(3):
        for column in range(3):
            print(matrix[column][line])
            if matrix[column][line].isalnum():
                output += matrix[column][line]
            else: 
                output += " "
    return output
def main():
    print(read_matrix())


if __name__ == '__main__':
    main()
