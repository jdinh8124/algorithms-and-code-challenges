# Convert Key, Values in an Object to Array
- Write a function that converts an object into an array of keys and values.

## Examples
```
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
})

```


### Whiteboard Notes

```
-function that takes obj and turns into array of keys and values
-input : {
  D: 1,
  B: 2,
  C: 3
}

- output : ["D", 1], ["B", 2], ["C", 3]

-Speical cases : none


-for in loop
- array to return with array of keys an values
- for in loop variables to push to the array to return
