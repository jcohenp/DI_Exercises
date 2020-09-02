# create a sum function that takes a list and calculates the sum of all elements in the list

list1 = [1,2,3,4,5]

def calc_sum_list(a_list):
    """""
    returns the sum of a given list:
    required argument: list variable
    """""
    if not a_list:
        sum_list = 0
        for element in a_list:
            if type(element) == int:
                sum_list += element
        return sum_list
    else: 
        return 0


def calc_prod_list(a_list):
    """""
    returns the product of a given list:
    required argument: list variable
    """""
    if not a_list:
        prod_list = 1
        for element in a_list:
            if type(element) == int:
                prod_list *= element
        return prod_list
    else:
        return 0


print(f"{calc_sum_list(list1)}")
print(f"{calc_prod_list(list1)}")
