# Consider this class


# class Cat:
#     species = 'mammal'

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     Instantiate the Cat object with 3 cats
#     Create a function that finds the oldest cat
#     Print out: “The oldest cat is x years old.”. x will be the oldest cat age by using the function in  # 2


class Cat:
    species = 'mammal'

    def __init__(self, name, age):
        self.name = name
        self.age = age



def find_oldest(*args):
    """"
    finds oldest cat.
    returns age and name
    """""
    oldest_age = args[0].age
    for obj in args:
        if obj.age > oldest_age:
            oldest_age = obj.age
            oldest_name = obj.name
    return  oldest_age, oldest_name


def main():
    cat1 = Cat(name="Max", age=10)


    cat2 = Cat(name="Steven", age=16)

    cat3 = Cat(name="Bobby", age=5)
    cats = [cat1, cat2, cat3]

    for val in find_oldest(cats):
        print(val)


if __name__ == "__main__":
    main()
