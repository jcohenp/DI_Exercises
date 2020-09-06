from farm import Farm


def main():
    mcdonald = Farm("McDonald")
    mcdonald.add_animal('cows', 5)
    mcdonald.add_animal('sheep')
    mcdonald.add_animal('sheep')
    mcdonald.add_animal('goats', 12)

    print(mcdonald.get_info())



if __name__ == '__main__':
    main()