# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it.
# Call the function once using positional arguments to make a shirt.
# Call the function a second time using keyword arguments.
# Modify the make_shirt() function so that shirts are large by default with a message that reads I love Python.
# Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


def make_shirt(size = "L", **kwargs):
    for k,v in kwargs.items():
        if k == "print_msg":
            print(f"The shirt you are making is size {size} with the following message:  {v}")

def main():
    make_shirt("M", print_msg="I love Python")
    make_shirt(size="size", print_msg="I love Python")
    make_shirt(size="S", print_msg="I feel like sleeping")  

if __name__ == "__main__":
    main()
