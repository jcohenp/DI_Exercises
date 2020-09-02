# # sampleDict = {
# #     "name": "Kelly",
# #     "age": 25,
# #     "salary": 8000,
# #     "city": "New york"

# # }
# # keysToRemove = ["name", "salary"]

# # for key in keysToRemove:
# #     sampleDict.pop(key)
# # print(sampleDict)


# my_list = []

# # for i in [2, 3, 4]:
# #     for j in [100, 200, 300]:
# #         my_list.append(i*j)

# my_list = [x*j for x in [2,3,4] for j in [100,200,300]]
# print(my_list)

# # >> [200, 400, 600, 300, 600, 900, 400, 800, 1200]

my_books = {
    "title": "Harry Potter",
    "author": "JK Rowling",
}

# for x, y in my_books.items():
#     print("the" + x + "is" + y)

# >> the title is Harry Potter
# the author is JK Rowling


for key, value in my_books.items():
    print(f"{key} : {value}")
