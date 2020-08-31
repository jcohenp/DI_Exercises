# Write a loop that prompts the user to enter a series of pizza toppings until they enter a ‘quit’ value.
toppings = []

while True:
    toppings_input = (str(input("enter toppings, when done enter 'quit'!\n")))
    if toppings_input == "":
        continue
    if toppings_input.strip() ==  "quit":
        break
    else:   
         toppings.append(toppings_input)
         # As they enter each topping, print a message saying you’ll add that topping to their pizza.
         print(f"Good taste, we will add {toppings[-1]} to your pizza")

print(f"Enjoy your pizza with {toppings} ")
