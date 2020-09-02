# Given a list, use a while loop to print out every elements from the end to the beginning.
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
fruit_count = 0

while fruit_count < len(basket)-1:
    if fruit_count % 2 == 0:    
        print(basket[fruit_count])\
    
    fruit_count += 1
