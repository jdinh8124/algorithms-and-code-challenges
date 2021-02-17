# Determine if String Halves Are Alike

```
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

```


### Notes 
- Two pointers looping (for loop that runs the strings length divided by two) through the string, starting at different points, one at the beginning and one at the middle (length / 2) checking for vowels 
- Brute force first strategy create array with lowercased vowels
- Use include methods to check if current letters are included if so increment vowel count by one for each check
- return the value of string 1's count against string 2's count