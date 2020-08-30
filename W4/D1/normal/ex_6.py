# Write a little program that asks a user for his height (in inches) and determines whether people are tall enough to ride a roller coaster or not.
# Tip : Minimum height is 35 inches

get_user_height = int(input("What is your height?\n"))
user_height_minimum = 35
user_height_unit = "inch"

if user_height_unit == "inch":
    if get_user_height <= 35:
        print("Enjoy your ride!\n")
    else: print("Sorry, too small! get out of here!")
else:
    print("wrong measurement unit")