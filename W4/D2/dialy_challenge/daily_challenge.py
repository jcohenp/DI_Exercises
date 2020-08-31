import datetime
# Ask a user for his birthdate(specify the format, for example: DD/MM/YYYY) and then:

# Display him a little cake, like this:

#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~

# The number of candles should be the last cypher of his age, if he is 53, then add 3 candles.

# DISCLAIMER: This is not going to be a pretty cake but i put focus on the functionality of the birthdate and date determination
##############################



# If he was born on a leap year, display two cakes !
current_year = datetime.datetime.now().year
current_month = datetime.datetime.now().month
current_day = datetime.datetime.now().day
is_leap_year = 1
print_cake_flag = 0
cake_width = 22
while True:
    # get_user_bday = "11/22/2012"
    get_user_bday = str(input("Enter your date of birth (DD/MM/YYYY)\n"))
    get_user_bday = get_user_bday.strip(" ")
    get_user_bday = get_user_bday.split("/")
    # print(type(datetime.datetime.now().year))
    if len(get_user_bday) == 3:
        day = int(get_user_bday[0])
        month = int(get_user_bday[1])
        year = int(get_user_bday[2])
        # print(get_user_bday)
        # check bday integrity:
        if year > 1940 and year < current_year:
            if year %4 == 0 or year %100 == 0:
                print(f"Your birth year is in a gap year: {year}")
                birth_date = get_user_bday
                #  set leap flag for amount of cakes
                is_leap_year = 2
                print_cake_flag = 1
                break
            elif month <= 1 and month >= 12:
                if month % 2 == 0:
                    if day > 0 and day < 31:
                        print(f"Your birth month is in a even month:{month}")
                        birth_date = get_user_bday
                        print_cake_flag = 1
                        break
                    break
                elif day > 0 and day < 30:
                        print(f"Your birth month is in a odd month:{month}")
                        birth_date = get_user_bday
                        print_cake_flag = 1
                        break
                else:
                    print("something with the date is wrong")
                    break
        else:
            print("something with the date is wrong")
            break
    else:
        print("something with the date is wrong")
        break

if print_cake_flag == 1:
        for cakes in range(is_leap_year):
            # get next age and candle amount
            age = current_year-year
            if current_month >= month:
                if current_month == month:  
                    if current_day > day:
                        age += 1
                else: 
                    age += 1
            if age > 10 and not age % 10 ==0:
                candles = str(age)
                candles = candles[-1]
                candles = int(candles)
            else:
                candles = 10
                print("Wohooo a round birthday!!\n")
            print(f"you will turn {age} and get {candles} candle/s\n")
            # draw cake
            # line 1
            line1 = ""
            for space in range((cake_width-candles)//3):
                line1 += " "
            for underscore in range((cake_width-candles)//5):
                line1 += "_"
            for candle in range(candles):
                line1 += "i"
            for underscore in range((cake_width-candles)//5):
                line1 += "_"
            for space in range((cake_width)//4):
                line1 += " "
            # line 2
            line2 = ""
            for space in range((cake_width)//4):
                line2 += " "
            line2 +=("|:H:A:P:P:Y:|")
            for space in range((cake_width)//4):
                line2 += " "
            # line 3
            line3 = ""
            for space in range((cake_width)//4):
                line3 += " "
            line3 += "|"
            for underscore in range((cake_width)//2):
                line3 += "_"
            line3 += "|"
            for space in range((cake_width)//4):
                line3 += " "
            line4 = ""
            for space in range((cake_width-1)//8):
                line4 += " "
            line4 +="|"
            for hat in range(cake_width):
                line4 += "^"
            line4 += "|"
            for space in range((cake_width-1)//8):
                line4 += " "
            # line5
            line5 = ""
            for space in range((cake_width)//8):
                line5 += " "
            line5 += "|  :B:I:R:T:H:D:A:Y:   |"
            for space in range((cake_width)//8):
                line5 += " "
            # line 6
            line6 = ""
            for space in range((cake_width)//8):
                line6 += " "
            line6 += "|"
            for space in range((cake_width)):
                line6 += " "
            line6 += "|"
            for space in range((cake_width)//8):
                line6 += " "
            # line7
            line7 = ""
            for space in range(((cake_width)//8)+1):
                line7 += " "
            for hat in range(cake_width):
                line7 += "^"
            # print cake
            print(line1)
            print(line2)
            print(line3)
            print(line4)
            print(line5)
            print(line6)
            print(line7)
        





