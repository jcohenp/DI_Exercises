# Exercise 1

# Your job is to automate some reports for a carpool application.
# On your app, 100 cars are available, every car can accept 4 passengers and a driver, and there will always be more cars than drivers.
# Today, there is:

#     30 drivers.
#     90 passengers waiting for a carpool.

# Your report needs to contain:

#     The number of cars available on your app.
#     The number of drivers registered on your app.
#     The number of empty cars today.
#     The number of passengers that can be transported today.
#     The average of passengers to put in each car.
#     Tip: Use python to generate it.

#available data
num_drivers = 30
num_passengers = 90
num_max_passengers_per_car = 4
num_cars_available = 100


if num_passengers is not None:
    # report Head:
    print(f"Cars Available: {num_cars_available}")
    print(f"Passengers: {num_passengers}")
    print(f"Drivers Available {num_drivers}")
    #passengers per car
    if (num_passengers // 4) < num_drivers:
        num_required_cars = num_passengers // 4
        num_average_passengers = num_passengers / 4
        print(f"Average passengers per Car: {num_average_passengers}")
        print(f"Required cars: {num_required_cars}")
        if num_required_cars < num_average_passengers:
            num_spaces_left_in_used_car = (num_average_passengers - num_required_cars)*4
            print(f"Spaces left in used car: {num_spaces_left_in_used_car}")




else:
    error = -1
    error_msg = "couldn't find number of passengers - we are out of business"
    print(f"Error {error}, {error_msg}")
