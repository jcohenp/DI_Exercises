s = str(input("String: "))
ch = str(input("Character: "))


def countCharacter(s, ch):
  if ch in s:
    count = 0
  for character in s:
    if character == "ch":
      count += 1
  return count


def main():
  print(countCharacter(s, ch))


if __name__ == '__main__':
  main()

