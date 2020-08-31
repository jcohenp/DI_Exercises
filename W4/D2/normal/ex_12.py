# Use a for loop to find the numbers which are divisible by 7 and multiple of 5, between 1500 and 2700.

for number in range(1500,2700,5):
    if number % 7 == 0:
        print(number)
