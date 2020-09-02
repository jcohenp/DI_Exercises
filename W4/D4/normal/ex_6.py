# The point of the exercise is to check is a person can retire depending on his age and his gender.
# Note: Retirement age in Israel is 67 for men, and 62 for women(born after April, 1947).

# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code(there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return it(the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function(with what arguments?) in order to receive an age back.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.
# Some Hints

# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message to the user informing them whether they can retire or not.
# As always, test your code to ensure it works.
import datetime
from dateutil import parser



current_year = datetime.datetime.now().year
current_month = datetime.datetime.now().month
current_day = datetime.datetime.now().day

def get_age(year, month, day):
    if  year and  month and  day:
        age = current_year - year
        if current_month >= month:
            if current_month == month:
                if current_day > day:
                    age += 1
            else:
                age += 1
        return age

def can_retire(gender, date_of_birth):
    if  gender and  date_of_birth:
        age = get_age(date_of_birth.year, date_of_birth.month, date_of_birth.day)
        retire = False
        if gender == "m" and age > 65:
            retire = True
        if gender == "f" and age > 62:
            retire = True
        return retire
    

def main():
    date_of_birth = parser.parse(input("Enter date of birth: "))
    gender = input(f"Enter the shorthand of your gender ('m' or 'f')")
    if can_retire(gender, date_of_birth) == True:
        print("Bye bye off to retirement!!")
    else: 
        print("keep working")
    

if __name__ == "__main__":
    main()
