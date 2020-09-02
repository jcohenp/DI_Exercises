# Given this list: list1 = [5, 10, 15, 20, 25, 50, 20], find value 20 in the list, and if it is present, 
# replace it with 200. 
# Only update the first occurrence of a value

# Hint: Look at the index method

list1 = [5, 10, 15, 20, 25, 50, 20]

if 20 in list1:
    find20 = list1.index(20)
    find20 = 200
    print(find20)


# sets