# Challenge the user to print the longest sentence without any “A”, 
# if he achieves it, tell him how many letters he wrote, else, print a fail message.


longest_sentence_without_A = str(input("Enter the longest sentence possible without an 'A!'\n"))
# remove spaces for no_a_letter_count


if "a" in longest_sentence_without_A:
    longest_sentence_without_A_no_spaces = longest_sentence_without_A.join(" ")
    no_a_letter_count = len(longest_sentence_without_A_no_spaces)
    print(f"You just typed {no_a_letter_count} letters without typing an 'a', or 'A'")
else: print("Nice try! You thought you just did something here didn't you?\n Well, sorry to burst your bubble but numerous sentences could be constructed without employing the first letter of the English lexicon.")



# search_for_a = re.search("[aA]",longest_sentence_without_A)
# print(search_for_a)
