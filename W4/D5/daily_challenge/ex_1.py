
def rev_binary(num):
    # binary = bin(num);
    res = "{:032b}".format(num)
    res = res[::-1]
    return res

def main():
    print(rev_binary(1234))


if __name__ == "__main__":
    main()
