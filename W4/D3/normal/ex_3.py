users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
#1/ print(disney_users_A) >> {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

#2/ print(disney_users_B) >> {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

#3/ print(disney_users_C) >> {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

# Use a for loop to recreate the  # 1 result. Tip : don’t hardcode the numbers

# user_list1 = dict(zip(range(0,len(users)),users))
# print(user_list1)
# Use a for loop to recreate the  # 2 result. Tip : don’t hardcode the numbers
# user_list2 = dict((value, key) for key,value in user_list1.items())
# print(user_list2)
# Use a method to recreate the  # 3 result
# users = set(users)
# user_list3 = dict(zip(sorted(users), range(0, len(users))))
# print(user_list3)

# Recreate the  # 1 result, only if:
# The characters’ names contain the letter “i”.
# user_list1 = [user for user in users if "i" not in user]
# user_list1 = dict(zip(range(0, len(user_list1)), user_list1))
# print(user_list1)

# The characters’ names start with the letter “m” or “p”.
user_list1 = [user for user in users if user.startswith(
    "M") or user.startswith("P")]
    
user_list1 = dict(zip(range(0, len(user_list1)), user_list1))
print(user_list1)
