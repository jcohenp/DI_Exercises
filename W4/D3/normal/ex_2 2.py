

    

def main():

    # Here are some information about a store.
    # name: Zara
    # creation_date: 1975
    # creator_name: Amancio Ortega Gaona
    # type_of_clothes: men, women, children, home
    # international_competitors: Gap, H & M, Benetton
    # number_stores: 7000
    # major_color: France -> blue, Spain -> red, US -> pink, green



    # Create a dictionary called store, and translate the information above into keys and values.
    #  create dictionary
    store = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H & M", "Benetton"],
    "number_stores": 7000,
    "major_color":{"France": ["blue"], "Spain": ["red"], "US": ["pink", "green"]}
    }
    more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000,
    }

    # print(store)

    # Change the number of stores to 2.
    store2 = dict.fromkeys(store)
    print(store2)
    # Print a sentence that explains who the clients of Zara are.
    # add customer info to store
    store['clients'] = 'annoying clients'
    # print customer info
    print(store['clients'])

    # Add to the dictionary, a key called country_creation which value is Spain.
    store['country_creation'] = 'Spain'
    # print(store['country_creation'])

    # If the key international_competitors is in the dictionary, add the store Desigual.
    if store['country_creation'] == "Spain":
    store['international_competitors'].append("Desigual")
    # print(store['international_competitors'])

    # Delete the information about the date of creation.
    del store["creation_date"]
    print(store)

    # Print the last international competitor.
    print(store['international_competitors'][-1])

    # Print in a sentence, the major clothes’ colors in the US.
    print(
    f"in the US people like the colors are {store['major_color']['US'][0]}, and {store['major_color']['US'][1]}")
    # Print the length of the dictionary.
    print(len(store))
    # Print only the keys of the dictionary.
    print(store.keys())
    # Create another dictionary called more_on_zara with the following information:

    print(more_on_zara)
    store.update(more_on_zara)

    print(store)
    print(store['number_stores'])
    # output 1000

    stores_worldwide = {}
    store.update(stores_worldwide)

 
if __name__ == "__main__":
    main()
    
  
