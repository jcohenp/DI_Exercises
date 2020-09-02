# Ask to the user to insert a month(from 1 to 12) and display the season of the month inserted:

#     Spring runs from March(3) to May(5)
#     Summer runs from June(6) to August(8)
#     Autumn runs from September(9) to November(11)
#     Winter runs from December(12) to February(2)

months_spring = [3,4,5]
months_summer =[6,7,8]
months_autumn = [9,10,11]
months_winter = [1,2,11,12]
user_entered_month = int(input("Enter the number of a month\n"))

if user_entered_month in months_spring:
    print("Spring")
elif user_entered_month in months_summer:
    print("Summer")
elif user_entered_month in months_autumn:
    print("Autumn")
elif user_entered_month in months_winter:
    print("Winter")
else:
    print("oops this is not a real month's number:)")

