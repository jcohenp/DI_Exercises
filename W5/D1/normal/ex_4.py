class Zoo:
    """
    Create a class Zoo

    """
    def __init__(self, zoo_name, animals):
        """
        In this class create a method __init__, that takes one parameter: zoo_name
        It i   nitializes two attributes: animals that is an empty list, name that is the name of the zoo.
        """
        self.zoo_name: zoo_name
        self.animals: animals

    def add_animal(self, new_animal):
        """
        Create a method add_animal that takes one parameter new_animal.
        The point of the method is to add the new_animal to the animals list,
        only if the new_animal isn’t already in the list.
        """
        if new_animal not in self.animals:
            self.animals = self.animals.append(new_animal)

    def get_animals(self):
        """
        Create a method get_animals that prints all the of animals in the zoo.
        """
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        """
        Create a method sell_animal that takes one parameter animal_sold. The point of the method is to say goodbye to the animal and then removing it from the list.
        """
        print(f"Good bye {animal_sold}")
        for animal in self.animals:
            if animal == animal_sold:
                del animal
        return self.animals

    def sort_animal(self):
        for animal in range(len(self.animals)):
            if list(animal):
                self.sort_animal(animal)
            else:
                for second_animal in range(len(self.animals)+1):
                    if animal[0] == second_animal[0]:
                        animal_list = [animal + second_animal]
                        self.animals.replace(animal, animal_list)
        return self.animals

    def get_pen(self):
        for animal in range(len(self.animals)+1):
            if list(animal):
                for print_animal in animal:
                    print(animal)



def main():
    animals_list = { 1: "Ape", 2: ["Baboon", "Bear"]}
    Safari = Zoo("Safari", animals_list)
    Zoo.get_pen(Safari)

if __name__ == '__main__':
    main()