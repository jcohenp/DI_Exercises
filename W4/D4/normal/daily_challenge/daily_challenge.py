matrix = [
    [7, '', 3],
    ['T', 's', 'i'],
    ['h', '%', 'x'],
    ['i', '', '#'],
    ['s', 'M', ''],
    ['$', 'a', ''],
    ['#', 't', '%'],
    ['i', 'r', '!']
]

def read_matrix():
    output = ""
    char_count = 0
    for line in range(3):
        for column in range(3):
            current_char = matrix[column][line]
            if not isinstance(current_char, int):
                if current_char.isalpha():
                    output += current_char
                else: 
                    if char_count >= 2:
                        output += " "
                        char_count = 0
                    char_count += 1
                    print(char_count, current_char)
                    
    return output
def main():
    print(read_matrix())


if __name__ == '__main__':
    main()
