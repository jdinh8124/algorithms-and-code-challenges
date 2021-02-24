## Every Other 

- Given a string str containing only the characters x and y, change it into a string such that there are no matching adjacent characters. You’re allowed to delete zero or more characters in the string. Find the minimum number of required deletions.

```
$ everyOther(‘xxyxxy’)
$ 2 // str becomes ‘xyxy’

```

### Notes
- loop through string and slice any index where the current letter matches the previous letter
- initialize with a count of how many letters are split 
- created a string to return



```
start with variables to keep track of count and an initialized empty string to reutrn

then we are going to loop and check the input string and every index and checking if it matches the previous letter in the new string

eventually we will return the count 
```