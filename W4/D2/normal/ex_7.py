# his time you have a list of users, and you want to remove every user that is below 16 years old.

# Write a program that ask every user their age, and if they are less than 16 years old, remove them from the list.
# At the end, print the final list.

users = ["alex","benjamin", "chris", "daniel"]

for user in users:
    print(f"Hey {user}, ")
    get_age_user = int(input("let us know how old you are?\n"))
    if get_age_user < 16:
        print("we noticed that you are too young for this game, GAME OVER.\n We have removed your user and access... BYEEEE!!!!")
        users.remove(user)

print(users)