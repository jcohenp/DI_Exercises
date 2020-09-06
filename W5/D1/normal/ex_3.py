
class Song:
    """
    # Define a class called Song, it will show the lyrics of a song.
    # Its __init__() method should have two arguments:
    """
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for element in self:
            print(element)

    # Inside your class create a method called sing_me_a_song that prints each element of lyrics on his own line.
    # Define a variable:


def main():
    # Call the sing_me_song method on this variable.
    happy_bday = ["Have a sunshine on you,", "Happy Birthday to you !"]
    Song.sing_me_a_song(happy_bday)


if __name__ == '__main__':
    main()
