
#    A movie theater charges different ticket prices depending on a person’s age.
#        if a person is under the age of 3, the ticket is free
#         if they are between 3 and 12, the ticket is $10
#         and if they are over age 12, the ticket is $15 .
#     Apply it to a family, ask every member of the family their age, and at the end of the loop, tell them the cost of the tickets for the whole family.
#     

#get number of group members:
size_group = int(input("How many tickets would you like to purchase\n"))
group_member_age = []
# group_member_age_input = ""
total_cost = 0
while size_group > 0:
    if size_group == None:
        continue
    else:
        group_member_age_input = int(input("What is your age?\n"))
        if group_member_age_input == "":
            error = -1
            error_msg = "no input" 
            print(f"Error {error}, {error_msg}\n")
            continue
        else:
            group_member_age.append(group_member_age_input)
            size_group -=1
            if group_member_age_input >= 3 and group_member_age_input <= 12:
                total_cost += 10
            elif group_member_age_input > 12:
                total_cost += 15
print (f"Total cost: {total_cost}\n\n")

# A group of teenagers is coming to your movie theater and want to see a movie that is restricted for people between 16 and 21 years old.
#     Write a program that ask every user their age, and then tell them which one can see the movie.
#     Tip: Try to add the allowed ones to a list.

for group_member in group_member_age:
    if group_member > 21:
        print(f"{group_member},years old you can watch the movie")
    else:
        print(f"{group_member},years old sorry kid - too young!")