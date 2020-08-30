# Write a little program that asks the user for a number and determines whether this number is odd or even.

entered_number = int(input("Enter a number to determine if it is odd or even!\n"))

if (entered_number % 2) == 0:
    print(f"{entered_number} is even")
else:
    print(f"{entered_number} is odd")
