# Install the faker module, and read the documentation.
# Create an empty list called users. Tip: It’s a list of dictionaries
# Create a function that adds dictionaries to the users list. Each user has the properties: name, adress, langage_spoken. Use faker to populate them with fake data.
from faker import Faker
fake = Faker()

users = []

def add_users(n):
    for iteration in range (n):
        language = ['German','French','Hebrew']
        newUser = {}
        # language_spoken = fake.language(ext_word_list = language)
        newUser.update({"name": fake.name()})
        newUser.update({"address": fake.address()})
        newUser.update({"address": fake.address()})
        newUser.update({"language-spoken": fake.language(ext_word_list=language)})
        users.append(newUser)


def main():
    add_users(5)
    print(users)

if __name__ == "__main__":
    main()
