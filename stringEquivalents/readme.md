# Check If Two String Arrays are Equivalent

- Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

- A string is represented by an array if the array elements concatenated in order forms the string.

```
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
```

### Notes 
```
- Initially join both arrays so we have two strings with all of the letters concat
- check if the lengths equal one another if not we will return false
- loop through and check if both have the same amounts of the same characters by having an object to check the first string will increment that letter, while the second string will decrement that letter
- After the initial loop we'll loop through the object if any letter returns other that 1 then we have non matching strings

```