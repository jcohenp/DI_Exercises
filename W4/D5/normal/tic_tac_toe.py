
turns = 9
players = ["Dovid", "Roy"]

def tic_tac_toe():
    if turns <= 9:
        print(f"turns left {turns}")


def player_input(player):
    turns += 1

def display_board():
    board = [["","",""], ["", "", ""], ["", "", ""]]
    print("TIC TAC TOE")
    for star in range(18):
        print("*", end="") 
    print("\n")
    
    line_count = 0
    for line in board:
        column_count = 0
        line_count += 1
        for column in line:
            column_count += 1
            print(f"  {column}  ", end="")
            if column_count == 3:
                print("\n")
        if line_count <= 2:
            print("----|-----|----")
    

    for star in range(18):
        print("*", end="")
    print("\n")


def main():
    display_board()


if __name__ == "__main__":
    main()
