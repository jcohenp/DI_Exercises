# Create a set called my_fav_numbers with your favorites numbers.
# Add two new numbers to it.
# Remove the last one.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to our_fav_numbers.

my_fav_numbers = {1,2,3}

my_fav_numbers.add(4)
my_fav_numbers.add(5)

my_fav_numbers.remove(4)

friend_fav_numbers = {5,2,12}

all_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(all_fav_numbers)