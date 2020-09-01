# Convert the two following lists, into dictionaries.
# Hint: Use the zip method

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]


number_dict = dict(zip(keys,values))

print(number_dict)
    
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# number_dict = zip(keys, values)
# zip object: (('Ten', 10), ('Twenty', 20), ('Thirty', 30))

# for key, value in number_dict:
#     print(f"{key}, {value}")

